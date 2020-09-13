import { Validators } from '@angular/forms';

export const OrScheduleDetailForm = {
  HN: [null, Validators.required],
  title: [null, Validators.required],
  firstName: [
    null,
    [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
  ],
  lastName: [null, Validators.required],
  gender: [null, Validators.required],
  SSN: [null, Validators.required],
  DOB: [null, Validators.required],
  age: [null, Validators.required],
  address: [null, Validators.required],
  nationality: [null, Validators.required],
};
