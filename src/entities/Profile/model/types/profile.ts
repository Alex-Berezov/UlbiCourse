import { Country, Currency } from 'shared/const/common'

export enum ValidateProfileError {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_FIRST_NAME = 'INCORRECT_FIRST_NAME',
  INCORRECT_LAST_NAME = 'INCORRECT_LAST_NAME',
  INCORRECT_USER_NAME = 'INCORRECT_USER_NAME',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_CITY = 'INCORRECT_CITY',
}

export interface Profile {
  firstName?: string
  lastName?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  userName?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readOnly: boolean
  validateErrors?: ValidateProfileError[]
}
