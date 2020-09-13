import { FormConditions } from '../../../../app/shared/modules/registry-form/registry-form.model';

export const OrScheduleDetailConditions: FormConditions = {
  all: [
    { control: 'DOB', parentControl: 'gender', conditions: ['Male', 'Female'] },
  ],
};
