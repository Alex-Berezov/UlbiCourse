import {
  AnyAction,
  EnhancedStore,
  ReducersMapObject,
  Reducer,
  CombinedState,
} from '@reduxjs/toolkit'
import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { loginSchema } from 'features/AuthByUserName'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  loginForm?: loginSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: string) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
