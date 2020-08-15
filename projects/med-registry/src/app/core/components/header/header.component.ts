import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/store/root-store.state';
import { AppStoreActions, AppStoreSelectors } from '../../../../app/store/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  device$ = this.store.select(AppStoreSelectors.device);
  sidebarMode$ = this.store.select(AppStoreSelectors.sidebarMode);
  @Output() navbarToggle = new EventEmitter<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleNavbar(): void {
    this.store.dispatch(AppStoreActions.toggleNavbar());
  }

  toggleSidebar(): void {
    this.store.dispatch(AppStoreActions.toggleSidebar());
  }
}
