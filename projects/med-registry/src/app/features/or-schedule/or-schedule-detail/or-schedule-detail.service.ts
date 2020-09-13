import { Injectable, OnDestroy } from '@angular/core';
import { FormGroup, FormGroupDirective, AbstractControl } from '@angular/forms';

import * as marked from 'marked';

import { IRegistryControlService } from '../../../shared/modules/registry-form/registry-control-service.interface';
import {
  ValidationMessage,
  InputValidations,
  FormVisibility,
  ControlCondition,
  InputConditions,
} from '../../../shared/modules/registry-form/registry-form.model';
import { DialogService } from '../../../shared/services/dialog.service';
import { Subscription } from 'rxjs';

@Injectable()
export class OrScheduleDetailService
  implements IRegistryControlService, OnDestroy {
  private dataDict: string;
  private tokens: marked.TokensList;
  private validations: InputValidations;
  private visibility: FormVisibility = {};
  private conditions: InputConditions;
  private formGroup: FormGroup;
  private formDirective: FormGroupDirective;
  private subscriptions: Subscription[] = [];

  constructor(private dialogService: DialogService) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  // ! need to initialize in ngAfterContentInit
  initialize(
    dataDict: string,
    formGroup: FormGroup,
    formDirective: FormGroupDirective,
    conditions: ControlCondition[],
    validations: InputValidations,
    visibility: FormVisibility
  ): void {
    this.setDataDict(dataDict);
    this.formGroup = formGroup;
    this.formDirective = formDirective;
    this.conditions = conditions;
    this.validations = validations;
    this.visibility = visibility;
  }

  // ! need to subscribe in ngAfterViewInit
  public subscribeFormConditions(): void {
    this.subscribeValueChanges(
      this.formGroup,
      this.conditions,
      this.visibility
    );

    // ! initial remove validator in hiding child control
    // this.getFormGroups().forEach((formGroup) => formGroup.setValue(formGroup.value));

    // this.initializeFormCompletion();
    // this.subscribeCompletionCalculation();
    // this.firstRunCompletion();
  }

  public subscribeValueChanges(
    formGroup: FormGroup,
    conditions: ControlCondition[],
    visibility: FormVisibility
  ): void {
    conditions.forEach((condition) => {
      const parentControl = formGroup.get(condition.parentControl);

      this.subscriptions.push(
        parentControl.valueChanges.subscribe((value) => {
          const element = condition.control;
          let visibled: boolean;

          if (value === null) {
            // NULL condition
            visibled = false;
          } else if (condition.conditions[0] === '!') {
            // NOT condition
            if (Array.isArray(value) && value.length === 0) {
              value = null;
            }
            visibled = condition.conditions[1] !== value;
          } else if (condition.conditions[0] === '@') {
            // CONTAIN condition
            visibled =
              value.findIndex((o) => o === condition.conditions[1]) >= 0;
          } else {
            visibled = condition.conditions.findIndex((o) => o === value) >= 0;
          }

          this.resetControl(element, formGroup, visibled);
          this.displayElement(element, visibility, visibled);
        })
      );
    });
  }

  private resetControl(
    element: string,
    formGroup: FormGroup,
    visibled: boolean
  ): void {
    const control = formGroup.get(element);
    if (control && visibled === false) {
      control.reset();
    }
  }

  private displayElement(
    element: string,
    visibility: FormVisibility,
    visibled: boolean
  ): void {
    visibility[element] = visibled;
  }

  private setDataDict(dataDict: string): void {
    this.dataDict = dataDict;
    this.tokens = marked.lexer(this.dataDict);
  }

  hasInfo(control: string): boolean {
    if (!this.tokens) {
      return;
    }

    return (
      this.tokens.findIndex((token) => {
        if (token[`type`] === 'heading') {
          const heading = token as marked.Tokens.Heading;
          if (heading.depth === 1 && heading.text === control) {
            return true;
          }
        }
        return false;
      }) > -1
    );
  }

  openInfo(control: string): void {
    if (!this.tokens) {
      return;
    }

    this.dialogService.createModalDialog({
      title: null,
      content: this.searhDataDict(control),
      buttons: ['Close'],
    });
  }

  private searhDataDict(key: string): string {
    let index = 0;
    const mdBlock: marked.Token[] = [];

    // Seek index of target h1
    while (index < this.tokens.length) {
      const token = this.tokens[index];

      if (token[`type`] === 'heading') {
        const heading = token as marked.Tokens.Heading;

        if (heading.depth === 1 && heading.text === key) {
          break;
        }
      }

      index++;
    }

    // Get block of target h1
    index++;
    while (index < this.tokens.length) {
      // const token = this.tokens[index];
      mdBlock.push(this.tokens[index]);
      index++;

      if (this.tokens[index] === undefined) {
        break;
      }

      if (
        this.tokens[index][`type`] === 'heading' &&
        (this.tokens[index] as marked.Tokens.Heading).depth === 1
      ) {
        break;
      }
    }

    let tokensList: marked.TokensList;
    tokensList = Object.assign(mdBlock, { links: this.tokens.links });
    return marked.parser(tokensList);
  }

  getInvalidMessages(
    formGroup: FormGroup,
    control: string
  ): ValidationMessage[] {
    let vals: ValidationMessage[];
    const invalidVals: ValidationMessage[] = [];

    const result = Object.entries(this.validations).find(
      ([key, value]) => key === control
    );
    if (result === undefined) {
      return null;
    }
    vals = result[1];

    vals.forEach((val) => {
      if (formGroup.get(control).hasError(val.type)) {
        invalidVals.push(val);
      }
    });

    return invalidVals;
  }
}
