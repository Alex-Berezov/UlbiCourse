import { StateSchema } from 'app/providers/StorePropvider'

export const getProfileReadOnly = (state: StateSchema) =>
  state.profile?.readOnly
