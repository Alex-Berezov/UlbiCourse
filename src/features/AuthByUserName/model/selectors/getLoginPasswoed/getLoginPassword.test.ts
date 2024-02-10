import { StateSchema } from 'app/providers/StorePropvider'
import { getLoginPassword } from './getLoginPasswoed'

describe('getLoginPassword', () => {
  it('should return the password from the state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'password',
      },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('password')
  })

  it('should return an empty string if there is no password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
