import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

export function createReduxStore(initialSatet?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialSatet,
  })

  // @ts-expect-error: This is for first iteration.
  store.reducerManager = reducerManager

  return store
}

export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
