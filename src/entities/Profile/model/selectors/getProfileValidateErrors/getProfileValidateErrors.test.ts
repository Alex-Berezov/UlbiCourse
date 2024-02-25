import { ValidateProfileError } from '../../types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { StateSchema } from 'app/providers/StorePropvider'

describe('getProfileValidateErrors', () => {
  it('should return ProfileValidateErrors from the state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_AGE,
        ],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ])
  })

  it('should return undefined if there is no error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    }
    expect(getProfileValidateErrors(state as StateSchema)).toBeUndefined()
  })
})
