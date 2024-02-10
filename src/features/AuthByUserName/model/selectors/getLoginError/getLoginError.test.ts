import { getLoginError } from './getLoginError'
import { StateSchema } from 'app/providers/StorePropvider'

describe('getLoginError', () => {
  it('should return the error from the state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  it('should return undefined if there is no error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    }
    expect(getLoginError(state as StateSchema)).toBeUndefined()
  })
})
