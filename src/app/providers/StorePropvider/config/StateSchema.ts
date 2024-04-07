import {
  AnyAction,
  ReducersMapObject,
  Reducer,
  CombinedState,
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { AxiosInstance } from 'axios'
import { articleDetailsSchema } from 'entities/Aricle'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { loginSchema } from 'features/AuthByUserName'
import { To, NavigateOptions } from 'react-router-dom'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  loginForm?: loginSchema
  profile?: ProfileSchema
  articleDetails?: articleDetailsSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: keyof StateSchema) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
