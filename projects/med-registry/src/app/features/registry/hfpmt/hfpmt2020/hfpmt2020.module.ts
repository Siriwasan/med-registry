import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Hfpmt2020Component } from './hfpmt2020.component';
import { SharedModule } from 'projects/med-registry/src/app/shared/shared.module';
import { FeatureModule } from '../../../feature.module';

const routes: Routes = [
  {
    path: '',
    component: Hfpmt2020Component,
  },
];

@NgModule({
  declarations: [Hfpmt2020Component],
  imports: [SharedModule, FeatureModule, RouterModule.forChild(routes)],
})
export class Hfpmt2020Module {}
