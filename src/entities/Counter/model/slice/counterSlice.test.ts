import { CounterSchema } from '../types/CounterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  test('should return the initial state', () => {
    expect(counterReducer(undefined, { type: undefined })).toEqual({ value: 0 })
  })

  test('should handle increment', () => {
    const previousState: CounterSchema = { value: 0 }
    expect(counterReducer(previousState, counterActions.increment())).toEqual({
      value: 1,
    })
  })

  test('should handle decrement', () => {
    const previousState: CounterSchema = { value: 1 }
    expect(counterReducer(previousState, counterActions.decrement())).toEqual({
      value: 0,
    })
  })
})
