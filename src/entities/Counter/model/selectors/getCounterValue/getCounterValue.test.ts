import { StateSchema } from 'app/providers/StorePropvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('Should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
