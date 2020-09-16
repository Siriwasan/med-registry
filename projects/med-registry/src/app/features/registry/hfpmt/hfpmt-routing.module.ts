import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hfpmt2020',
    loadChildren: () =>
      import('./hfpmt2020/hfpmt2020.module').then((m) => m.Hfpmt2020Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HfpmtRoutingModule {}
