import { FC, useEffect } from 'react'
import { ReduxStoreWithManager } from 'app/providers/StorePropvider'
import { useDispatch, useStore } from 'react-redux'
import { StateSchemaKeys } from 'app/providers/StorePropvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer
}

interface DynamicModuleLoaderProps {
  children: any
  reducers: ReducersList
  removeAftrerUnmount: boolean
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAftrerUnmount } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch<any>()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKeys, reducer)
      dispatch({ type: `@${name}/init` })
    })

    return () => {
      if (removeAftrerUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKeys)
          dispatch({ type: `@${name}/destroy` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default DynamicModuleLoader
