import { StateSchema } from 'app/providers/StorePropvider'

export const getUserAuthData = (state: StateSchema) => state.user.authData
