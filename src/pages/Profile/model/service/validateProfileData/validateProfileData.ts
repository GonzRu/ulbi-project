import { Profile } from 'entities/Profile';
import { ValidateErrors } from 'entities/Profile/model/types/ValidateErrors';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateErrors.NO_DATA];
  }

  const {
    first, lastname, age, country,
  } = profile;
  const errors: ValidateErrors[] = [];

  if (!first || !lastname) {
    errors.push(ValidateErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age) || age < 0) {
    errors.push(ValidateErrors.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateErrors.INCORRECT_COUNTRY);
  }

  return errors;
};
