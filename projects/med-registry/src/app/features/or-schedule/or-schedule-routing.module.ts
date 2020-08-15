import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrScheduleComponent } from './or-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: OrScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrScheduleRoutingModule {}
