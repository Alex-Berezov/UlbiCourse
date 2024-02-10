import { loginByUserName } from './loginByUserName'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByUserName', () => {
  it('should return user data', async () => {
    const userValues = { id: '1', userName: 'admin' }

    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValues }))
    const res = await thunk.callThunk({ userName: 'admin', password: 'admin' })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValues)
    )
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(userValues)
  })

  it('should return error', async () => {
    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const res = await thunk.callThunk({ userName: 'admin', password: 'admin' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toBe('authError')
  })
})
