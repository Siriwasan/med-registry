import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { ScrollSpyModule } from '../../../../app/shared/modules/scroll-spy/scroll-spy.module';
import { RegistryFormModule } from '../../../../app/shared/modules/registry-form/registry-form.module';

import { OrScheduleDetailComponent } from './or-schedule-detail.component';

import { MedRegistryLibraryModule } from 'dist/med-registry-library';

const routes: Routes = [
  {
    path: '',
    component: OrScheduleDetailComponent,
  },
];

@NgModule({
  declarations: [OrScheduleDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MedRegistryLibraryModule,
    RegistryFormModule,
    ScrollSpyModule,
  ],
})
export class OrScheduleDetailModule {}
