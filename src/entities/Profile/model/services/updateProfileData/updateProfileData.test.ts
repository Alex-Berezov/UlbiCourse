import { updateProfileData } from './updateProfileData'
import { Country, Currency } from 'shared/const/common'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { ValidateProfileError } from '../../types/profile'

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
  id: '1',
}

describe('updateProfileData', () => {
  it('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const res = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(data)
  })

  it('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const res = await thunk.callThunk()

    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  it('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, firstName: '' },
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const res = await thunk.callThunk()

    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toEqual([ValidateProfileError.INCORRECT_FIRST_NAME])
  })
})
