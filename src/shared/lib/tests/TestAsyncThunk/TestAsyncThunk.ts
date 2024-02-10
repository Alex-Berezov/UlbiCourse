import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StorePropvider'
import axios, { AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFunction<any>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.actionCreator = actionCreator

    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const res = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    })

    return res
  }
}
