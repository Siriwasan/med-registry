import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { OrScheduleComponent } from './or-schedule/or-schedule.component';
// import { MatDatepickerModule, MatMomentDateModule } from '../shared/modules/mat-datepicker';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule],
  exports: [],
})
export class FeatureModule {}
