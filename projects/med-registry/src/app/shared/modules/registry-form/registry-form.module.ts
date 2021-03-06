import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { RegistryFormService } from './registry-form.service';

import { RegistryInputComponent } from './controls/registry-input.component';
import { RegistryTextareaComponent } from './controls/registry-textarea';
import { RegistryDatePickerComponent } from './controls/registry-date-picker.component';
import { RegistrySelectComponent } from './controls/registry-select.component';
import { RegistrySelectSearchComponent } from './controls/registry-select-search.component';
import { RegistrySelectMultipleComponent } from './controls/registry-select-multiple.component';
import { RegistryCheckboxComponent } from './controls/registry-checkbox.component';
// import { RegistryAutocompleteComponent } from './registry-autocomplete.component';

@NgModule({
  declarations: [
    RegistryInputComponent,
    RegistryTextareaComponent,
    RegistryDatePickerComponent,
    RegistrySelectComponent,
    RegistrySelectSearchComponent,
    RegistrySelectMultipleComponent,
    // RegistryAutocompleteComponent,
    RegistryCheckboxComponent,
  ],
  imports: [SharedModule],
  exports: [
    RegistryInputComponent,
    RegistryTextareaComponent,
    RegistryDatePickerComponent,
    RegistrySelectComponent,
    RegistrySelectSearchComponent,
    RegistrySelectMultipleComponent,
    // RegistryAutocompleteComponent,
    RegistryCheckboxComponent,
  ],
  providers: [RegistryFormService],
})
export class RegistryFormModule {}
