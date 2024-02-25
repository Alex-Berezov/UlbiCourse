import { Country, Currency } from 'shared/const/common'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const data = {
  firstName: 'Alex',
  lastName: 'Berezov',
  age: 41,
  currency: Currency.EUR,
  country: Country.Germany,
  city: 'Moscow',
  userName: 'admin',
  avatar:
    'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
}

describe('profileSlice', () => {
  it('test set readOnly', () => {
    const state: DeepPartial<ProfileSchema> = { readOnly: false }

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))
    ).toStrictEqual({ readOnly: true })
  })

  it('test set cancel editing', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { userName: '' } }

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdditing())
    ).toEqual({ readOnly: true, validateErrors: undefined, data, form: data })
  })

  it('test set update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { userName: '123' },
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ userName: '123456' })
      )
    ).toEqual({ form: { userName: '123456' } })
  })

  it('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  })

  it('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readOnly: true,
      form: data,
      data,
    })
  })
})
