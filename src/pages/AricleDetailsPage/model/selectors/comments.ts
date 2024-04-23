import { StateSchema } from 'app/providers/StorePropvider'

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading
export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsComments?.error
