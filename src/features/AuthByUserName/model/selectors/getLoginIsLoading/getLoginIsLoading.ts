import { StateSchema } from 'app/providers/StorePropvider'

export const getLoginIsLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || false
