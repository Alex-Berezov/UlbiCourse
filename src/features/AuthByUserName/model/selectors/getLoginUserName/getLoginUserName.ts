import { StateSchema } from 'app/providers/StorePropvider'

export const getLoginUserName = (state: StateSchema) =>
  state?.loginForm?.userName || ''
