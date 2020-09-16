import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hfpmt',
    loadChildren: () =>
      import('./hfpmt/hfpmt.module').then((m) => m.HfpmtModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistryRoutingModule {}
