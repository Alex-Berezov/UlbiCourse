import axios from 'axios'
import { loginByUserName } from './loginByUserName'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

describe('loginByUserName', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema

  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // it('should return user data', async () => {
  //   const userValues = { id: '1', userName: 'admin' }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValues }))
  //   const action = loginByUserName({ userName: 'admin', password: 'admin' })
  //   const res = await action(dispatch, getState, undefined)

  //   expect(mockedAxios.post).toHaveBeenCalled()

  //   expect(dispatch).toHaveBeenCalledTimes(3)

  //   expect(res.meta.requestStatus).toBe('fulfilled')

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValues))

  //   expect(res.payload).toEqual(userValues)
  // })

  // it('should return error', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUserName({ userName: 'admin', password: 'admin' })
  //   const res = await action(dispatch, getState, undefined)

  //   expect(mockedAxios.post).toHaveBeenCalled()

  //   expect(dispatch).toHaveBeenCalledTimes(2)

  //   expect(res.meta.requestStatus).toBe('rejected')

  //   expect(res.payload).toBe('authError')
  // })

  it('should return user data', async () => {
    const userValues = { id: '1', userName: 'admin' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValues }))

    const thunk = new TestAsyncThunk(loginByUserName)
    const res = await thunk.callThunk({ userName: 'admin', password: 'admin' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValues)
    )
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(userValues)
  })

  it('should return error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUserName)
    const res = await thunk.callThunk({ userName: 'admin', password: 'admin' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toBe('authError')
  })
})
