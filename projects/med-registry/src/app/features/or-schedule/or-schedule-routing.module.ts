import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrScheduleComponent } from './or-schedule.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: OrScheduleComponent,
  // },
  {
    path: 'or-schedule-list',
    loadChildren: () =>
      import('./or-schedule-list/or-schedule-list.module').then(
        (m) => m.OrScheduleListModule
      ),
  },
  {
    path: 'or-schedule-detail',
    loadChildren: () =>
      import('./or-schedule-detail/or-schedule-detail.module').then(
        (m) => m.OrScheduleDetailModule
      ),
  },
  { path: '', redirectTo: 'or-schedule-detail', pathMatch: 'full' },
];

@NgModule({
  declarations: [OrScheduleComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrScheduleRoutingModule {}
