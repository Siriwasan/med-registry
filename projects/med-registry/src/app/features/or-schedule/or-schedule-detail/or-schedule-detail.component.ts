import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

import { OrScheduleDetailService } from './or-schedule-detail.service';
import {
  OrScheduleDetailForm,
  OrScheduleDetailValidations,
  OrScheduleDetailDictionary,
} from '.';
import {
  FormVisibility,
  SectionMember,
} from '../../../shared/modules/registry-form/registry-form.model';
import { OrScheduleDetailConditions } from './or-schedule-detail.condition';
import { RegistryFormService } from '../../../shared/modules/registry-form/registry-form.service';

@Component({
  selector: 'app-or-schedule-detail',
  templateUrl: './or-schedule-detail.component.html',
  styleUrls: ['./or-schedule-detail.component.scss'],
  providers: [RegistryFormService],
})
export class OrScheduleDetailComponent implements OnInit, AfterContentInit {
  fg: FormGroup;
  controlService = this.registryFormService;
  visibility: FormVisibility = {};

  @ViewChild('fd') fd: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    // private orScheduleDetailService: OrScheduleDetailService,
    private registryFormService: RegistryFormService
  ) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // this.orScheduleDetailService.initialize(
    //   OrScheduleDetailDictionary,
    //   this.fg,
    //   this.fd,
    //   OrScheduleDetailConditions,
    //   OrScheduleDetailValidations,
    //   this.visibility
    // );

    this.fg = this.formBuilder.group(OrScheduleDetailForm);

    const sectionMembers: SectionMember[] = [
      ['all', this.fg, this.fd, OrScheduleDetailConditions.all],
    ];
    this.registryFormService.initializeForm(
      sectionMembers,
      OrScheduleDetailValidations,
      this.visibility
    );
    this.registryFormService.setDataDict(OrScheduleDetailDictionary);
    this.registryFormService.subscribeFormConditions();
  }
}
