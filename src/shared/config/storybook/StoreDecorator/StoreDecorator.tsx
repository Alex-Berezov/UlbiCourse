/* eslint-disable indent */
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StorePropvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
}

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
