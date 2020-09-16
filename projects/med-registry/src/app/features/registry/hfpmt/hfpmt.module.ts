import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HfpmtRoutingModule } from './hfpmt-routing.module';
import { HfpmtComponent } from './hfpmt.component';


@NgModule({
  declarations: [HfpmtComponent],
  imports: [
    CommonModule,
    HfpmtRoutingModule
  ]
})
export class HfpmtModule { }
