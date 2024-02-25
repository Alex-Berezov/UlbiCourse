import { getProfileError } from './getProfileError'
import { StateSchema } from 'app/providers/StorePropvider'

describe('getProfileError', () => {
  it('should return the error from the state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('error')
  })

  it('should return undefined if there is no error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    }
    expect(getProfileError(state as StateSchema)).toBeUndefined()
  })
})
