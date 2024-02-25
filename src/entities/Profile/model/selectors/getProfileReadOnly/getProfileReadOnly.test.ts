import { getProfileReadOnly } from './getProfileReadOnly'
import { StateSchema } from 'app/providers/StorePropvider'

describe('getProfileReadOnly', () => {
  it('should return readOnly from the state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: true,
      },
    }
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
  })

  it('should return undefined if there is no error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    }
    expect(getProfileReadOnly(state as StateSchema)).toBeUndefined()
  })
})
