import { ValidateProfileError } from '../../types/profile'
import { validateProfileData } from './validateProfileData'
import { Country, Currency } from 'shared/const/common'

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

describe('validateProfileData', () => {
  it('success', () => {
    const res = validateProfileData(data)

    expect(res).toEqual([])
  })

  it('without firstName, lastName, userName, city', () => {
    const res = validateProfileData({
      ...data,
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
    })

    expect(res).toEqual([
      ValidateProfileError.INCORRECT_FIRST_NAME,
      ValidateProfileError.INCORRECT_LAST_NAME,
      ValidateProfileError.INCORRECT_USER_NAME,
      ValidateProfileError.INCORRECT_CITY,
    ])
  })

  it('without age', () => {
    const res = validateProfileData({ ...data, age: undefined })

    expect(res).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  it('age greater then 99 ', () => {
    const res = validateProfileData({ ...data, age: 100 })

    expect(res).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  it('age less then 18 ', () => {
    const res = validateProfileData({ ...data, age: 17 })

    expect(res).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
})
