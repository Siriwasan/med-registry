import {
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
  HostListener,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../app/store/root-store.state';
import { AppStoreSelectors, AppStoreActions } from '../../../../app/store/app';
import { ScrollSpyService } from '../scroll-spy/scroll-spy.service';

export class RegistryFormComponent
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  public currentSection = '';
  public tocMaxHeight: string;
  private tocMaxHeightOffset = 0;

  private listener: any;
  private scrollTarget: Element;
  private currentSectionSubscription: Subscription;

  device = 'Others';
  sidebarMode = 'side';
  sidebarOpened = true;
  completionContent = true;
  private subscription: Subscription[] = [];

  constructor(
    protected store: Store<AppState>,
    protected scrollSpy: ScrollSpyService,
    protected changeDetector: ChangeDetectorRef,
    protected hostElement: ElementRef
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.store
        .select(AppStoreSelectors.device)
        .subscribe((newDevice) => (this.device = newDevice)),
      this.store
        .select(AppStoreSelectors.sidebarMode)
        .subscribe((mode) => (this.sidebarMode = mode)),
      this.store
        .select(AppStoreSelectors.sidebarOpened)
        .subscribe((open) => (this.sidebarOpened = open))
    );
    setTimeout(
      () => this.store.dispatch(AppStoreActions.initializeLayout()),
      0
    );
  }

  ngAfterViewInit(): void {
    this.initializeScrollSpy();
    this.listener = () => this.calculatTocMaxHeight();
    this.scrollTarget.addEventListener('scroll', this.listener, false);
    this.currentSectionSubscription = this.scrollSpy
      .getCurrentSection$()
      .subscribe((currentSection: string): void => {
        this.currentSection = currentSection;
        this.changeDetector.markForCheck();
      });
  }

  ngAfterContentInit(): void {
    this.calculatTocMaxHeight();
  }

  private initializeScrollSpy(): void {
    const el = this.hostElement.nativeElement as Element;
    this.scrollTarget = el.querySelector('mat-drawer-content');
    if (!this.scrollTarget) {
      console.log('[Error] Scroll target is not define');
    }

    this.scrollSpy.setScrollTarget(this.scrollTarget);
    this.scrollSpy.subscribeScroll();
  }

  ngOnDestroy(): void {
    if (this.scrollTarget !== undefined) {
      this.scrollTarget.removeEventListener('scroll', this.listener, false);
    }
    // this.currentSectionSubscription.unsubscribe();
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculatTocMaxHeight();

    if (this.currentSection !== '') {
      document
        .getElementById(this.currentSection + 'TOC')
        ?.scrollIntoView({ block: 'nearest' });
    }
  }

  calculatTocMaxHeight(): void {
    // if (!this.tocMaxHeightOffset) {
    // Must wait until `mat-toolbar` is measurable.
    const el = this.hostElement.nativeElement as Element;
    const headerEl = document.querySelector('.app-header');
    // const footerEl = el.querySelector('footer');
    // if (headerEl && footerEl) {
    //   this.tocMaxHeightOffset = headerEl.clientHeight + footerEl.clientHeight + 24; //  fudge margin
    // }
    this.tocMaxHeightOffset = headerEl.clientHeight;
    // }

    const cutOffHeight =
      document.body.scrollHeight - window.pageYOffset - this.tocMaxHeightOffset;
    this.completionContent = cutOffHeight > 550;
    const completionContainerHeight = (this.completionContent ? 250 : 70) - 32;

    this.tocMaxHeight = (
      document.body.scrollHeight -
      window.pageYOffset -
      this.tocMaxHeightOffset -
      completionContainerHeight
    ).toFixed(2);
  }

  public isActive(section: string): boolean {
    return this.currentSection === section;
  }

  closeSidebar(): void {
    this.store.dispatch(AppStoreActions.closeSidebar());
  }

  scrollTo(id: string): void {
    this.scrollSpy.scrollTo(id);
  }

  tocClicked(toc: string): void {
    setTimeout(() => {
      this.scrollSpy.scrollTo(toc);
    }, 0);

    this.store.dispatch(AppStoreActions.closeSidebar());
  }

  //#region Warning before leaving
  // public canDeactivate() {
  //   // ? Prototype for leaving form after changed
  //   // ? return confirm('Do you really want to leave?');
  //   // ? return this.form.submitted || !this.form.dirty;

  //   if (!this.registryFormService.isFormDirty()) {
  //     return true;
  //   }

  //   const dialogRef = this.dialogService.createModalDialog({
  //     title: 'Warning!!!',
  //     content: 'Form is not saved before leaving',
  //     buttons: ['Discard change', 'Cancel'],
  //     // buttons: ['Save', 'Discard change', 'Cancel']
  //   });

  //   return dialogRef.afterClosed().pipe(
  //     map((result) => {
  //       // if (result === 'Save') {
  //       //   return true;
  //       // }
  //       if (result === 'Discard change') {
  //         return true;
  //       }
  //       if (result === 'Cancel') {
  //         return false;
  //       }
  //     }),
  //     take(1)
  //   );
  // }

  // @HostListener('window:beforeunload', ['$event'])
  // unloadHandler(event: Event) {
  //   if (!isDevMode() && this.registryFormService.isFormDirty()) {
  //     console.log('Processing beforeunload...');
  //     event.returnValue = false;
  //   }
  // }
  //#endregion Warning before leaving
}
