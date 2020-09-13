import { FormGroup, FormGroupDirective } from '@angular/forms';

export interface FormConditions {
  [section: string]: ControlCondition[];
}

export type InputConditions = ControlCondition[];

export interface ControlCondition {
  control: string;
  parentControl: string;
  conditions: string[] | number[];
}

export interface FormValidations {
  [section: string]: {
    [control: string]: ValidationMessage[];
  };
}

export interface InputValidations {
  [control: string]: ValidationMessage[];
}

export interface ValidationMessage {
  type: string;
  message: string;
}

export type SectionMember = [
  string,
  FormGroup,
  FormGroupDirective,
  ControlCondition[]
];
// Single section:
//   ['all', this.formGroup, this.formDirective, formConditions.section]
// Multi section:
//   ['A', this.formGroupA, this.formDirectiveA, formConditions.sectionA]
//   ['B', this.formGroupB, this.formDirectiveB, formConditions.sectionB]

export interface TableOfCentent {
  section: string;
  title: string;
}

export interface FormCompletion {
  valid: number;
  total: number;
}

export interface RegistryCompletion {
  [section: string]: FormCompletion;
}

export interface FormVisibility {
  [id: string]: boolean | FormVisibility[];
}

export interface RegSelectChoice {
  value: string | number;
  label: string | number;
  altLabel?: string;
  detailHtml?: string;
  group?: string;
  disable: boolean;
}

export interface RegSelectChoiceGroup {
  name: string;
  choices: RegSelectChoice[];
}
