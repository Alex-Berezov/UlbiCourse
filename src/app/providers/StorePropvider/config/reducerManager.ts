import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
  combineReducers,
} from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKeys } from './StateSchema'

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKeys[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (
      state: StateSchema | undefined,
      action: AnyAction
    ): CombinedState<StateSchema> => {
      if (keysToRemove.length > 0) {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const newState: StateSchema = state ? { ...state } : ({} as StateSchema)
        for (const key of keysToRemove) {
          delete newState[key]
        }
        keysToRemove = []
        return combinedReducer(newState, action)
      }

      return combinedReducer(state as StateSchema, action)
    },

    add: (key: keyof StateSchema, reducer: Reducer<any, AnyAction>) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: string) => {
      const schemaKey = key as keyof StateSchema
      if (!schemaKey || !reducers[schemaKey]) {
        return
      }

      delete reducers[schemaKey]
      keysToRemove.push(schemaKey)
      combinedReducer = combineReducers(reducers)
    },
  }
}
