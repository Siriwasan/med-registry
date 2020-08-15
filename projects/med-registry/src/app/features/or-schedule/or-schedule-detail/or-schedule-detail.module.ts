import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

import { OrScheduleDetailComponent } from './or-schedule-detail.component';

const routes: Routes = [
  {
    path: '',
    component: OrScheduleDetailComponent,
  },
];

@NgModule({
  declarations: [OrScheduleDetailComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class OrScheduleDetailModule {}
