/* eslint-disable indent */
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StorePropvider'
import { articleDetailsReducer } from 'entities/Aricle/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile'
import { AddCommentFormReducer } from 'features/AddCommentForm/model/slices/AddCommentForm'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'
import { ArticleDetailsCommentsReducer } from 'pages/AricleDetailsPage/model/slices/ArticleDetailsCommentsSlice'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: AddCommentFormReducer,
  articleDetailsComments: ArticleDetailsCommentsReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
