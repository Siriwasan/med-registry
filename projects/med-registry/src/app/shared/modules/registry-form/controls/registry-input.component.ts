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
  selector: 'reg-input',
  template: `
    <mat-form-field [formGroup]="formGroup" style="width: 100%">
      <input
        [type]="type"
        matInput
        [formControlName]="controlName"
        name="controlName"
        [placeholder]="placeholder"
        [required]="require"
        [readonly]="readonly"
        (focusout)="onFocusOut()"
      />
      <mat-hint>
        <a><ng-content></ng-content></a>
        <mat-icon
          style="cursor: help;"
          (click)="openInfo(controlName)"
          *ngIf="bInfo"
        >
          info_outline
        </mat-icon>
      </mat-hint>
      <mat-error *ngIf="self.invalid && (self.dirty || self.touched)">
        <div
          *ngFor="let validation of getInvalidMessages(formGroup, controlName)"
        >
          <a>{{ validation.message }}</a>
        </div>
        <mat-icon
          style="cursor: help;"
          (click)="openInfo(controlName)"
          *ngIf="bInfo"
        >
          info_outline
        </mat-icon>
      </mat-error>
    </mat-form-field>
  `,
  styleUrls: ['./registry-control.component.scss'],
})
export class RegistryInputComponent extends RegistryControlComponent
  implements OnInit {
  @Input() type = 'text';
  @Output() focusOut: EventEmitter<void> = new EventEmitter();

  constructor(protected elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onFocusOut(): void {
    this.focusOut.emit();
  }
}
