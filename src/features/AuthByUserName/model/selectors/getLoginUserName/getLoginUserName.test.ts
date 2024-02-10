import { StateSchema } from 'app/providers/StorePropvider'
import { getLoginUserName } from './getLoginUserName'

describe('getLoginUserName', () => {
  it('should return the userName from the state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        userName: 'userName',
      },
    }
    expect(getLoginUserName(state as StateSchema)).toEqual('userName')
  })

  it('should return an empty string if there is no userName', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    }
    expect(getLoginUserName(state as StateSchema)).toEqual('')
  })
})
