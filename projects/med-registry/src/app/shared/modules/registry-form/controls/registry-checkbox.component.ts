import {
  Component,
  Input,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { RegistryControlComponent } from './registry-control.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'reg-checkbox',
  template: `
    <div [formGroup]="formGroup" style="width: 100%">
      <mat-checkbox [formControlName]="controlName">{{
        placeholder
      }}</mat-checkbox>
      <mat-icon
        class="checkbox_info"
        style="cursor: help;"
        (click)="openInfo(controlName)"
        *ngIf="bInfo"
      >
        info_outline
      </mat-icon>
    </div>
  `,
  styleUrls: ['./registry-control.component.scss'],
})
export class RegistryCheckboxComponent
  extends RegistryControlComponent
  implements OnInit {
  constructor(protected elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
