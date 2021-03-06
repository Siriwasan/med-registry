import { Validators } from '@angular/forms';

export const OrScheduleDetailForm = {
  HN: [null, Validators.required],
  Title: [null, Validators.required],
  FirstName: [
    null,
    [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
  ],
  LastName: [null, Validators.required],
  Gender: [null, Validators.required],
  SSN: [null, Validators.required],
  DOB: [null, Validators.required],
  Age: [null, Validators.required],
  Address: [null, Validators.required],
  Nationality: [null, Validators.required],
  Phone: [null, Validators.required],
  ReferrerHospital: [null, Validators.required],
  DestinationHospital: [null, Validators.required],
  Diagnosis: [null, Validators.required],
  Procedure: [null, Validators.required],
  Surgeon: [null],
  Assistant: [null],
  Note: [null, Validators.required],
};
