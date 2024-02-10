import { StateSchema } from 'app/providers/StorePropvider'

export const getProfileIsLoading = (state: StateSchema) =>
  state.profile?.isLoading
