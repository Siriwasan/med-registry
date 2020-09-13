import { FormValidations } from '../../../../app/shared/modules/registry-form/registry-form.model';

export const OrScheduleDetailValidations: FormValidations = {
  all: {
    firstName: [
      { type: 'required', message: 'HN is required.' },
      { type: 'minlength', message: 'HN must be at least 5.' },
      { type: 'maxlength', message: 'HN cannot be more than 5.' },
    ],
    lastName: [
      { type: 'required', message: 'AN is required.' },
      { type: 'minlength', message: 'AN must be at least 11.' },
      { type: 'maxlength', message: 'AN cannot be more than 12.' },
    ],
  },
};
