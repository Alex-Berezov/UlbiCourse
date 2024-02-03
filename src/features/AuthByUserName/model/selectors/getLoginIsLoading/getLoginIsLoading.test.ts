import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StorePropvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
  it('should return the isLoading from the state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  it('should return false if there is no isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
