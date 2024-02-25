import { getProfileIsLoading } from './getProfileIsLoading'
import { StateSchema } from 'app/providers/StorePropvider'

describe('getProfileIsLoading', () => {
  it('should return loading from the state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
  })

  it('should return undefined if there is no error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    }
    expect(getProfileIsLoading(state as StateSchema)).toBeUndefined()
  })
})
