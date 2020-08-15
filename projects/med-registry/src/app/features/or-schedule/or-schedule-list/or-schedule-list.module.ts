import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

import { OrScheduleListComponent } from './or-schedule-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrScheduleListComponent,
  },
];

@NgModule({
  declarations: [OrScheduleListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class OrScheduleListModule {}
