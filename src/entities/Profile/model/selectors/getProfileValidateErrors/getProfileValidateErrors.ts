import { StateSchema } from 'app/providers/StorePropvider'

export const getProfileValidateErrors = (state: StateSchema) =>
  state.profile?.validateErrors
