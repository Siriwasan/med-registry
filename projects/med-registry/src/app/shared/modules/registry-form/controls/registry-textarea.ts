import { Component, Input, ElementRef, OnInit } from '@angular/core';

import { RegistryControlComponent } from './registry-control.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'reg-textarea',
  template: `
    <mat-form-field [formGroup]="formGroup" style="width: 100%">
      <textarea
        matInput
        [rows]="rows"
        [formControlName]="controlName"
        name="controlName"
        [placeholder]="placeholder"
        [required]="require"
        [readonly]="readonly"
      ></textarea>
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
export class RegistryTextareaComponent
  extends RegistryControlComponent
  implements OnInit {
  @Input() rows = 1;

  constructor(protected elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
