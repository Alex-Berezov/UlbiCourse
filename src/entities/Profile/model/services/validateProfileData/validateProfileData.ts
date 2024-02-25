import { Profile, ValidateProfileError } from '../../types/profile'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const { firstName, lastName, userName, age, city } = profile

  const errors: ValidateProfileError[] = []

  if (!firstName) {
    errors.push(ValidateProfileError.INCORRECT_FIRST_NAME)
  }

  if (!lastName) {
    errors.push(ValidateProfileError.INCORRECT_LAST_NAME)
  }

  if (!userName) {
    errors.push(ValidateProfileError.INCORRECT_USER_NAME)
  }

  if (typeof age !== 'number' || isNaN(age) || age < 18 || age > 99) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY)
  }

  return errors
}
