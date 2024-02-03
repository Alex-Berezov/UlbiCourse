import { DeepPartial } from '@reduxjs/toolkit'
import { loginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  it('test set userName', () => {
    const state: DeepPartial<loginSchema> = { userName: 'admin' }

    expect(
      loginReducer(state as loginSchema, loginActions.setUserName('admin'))
    ).toStrictEqual({ userName: 'admin' })
  })

  it('test set password', () => {
    const state: DeepPartial<loginSchema> = { password: 'admin' }

    expect(
      loginReducer(state as loginSchema, loginActions.setPassword('admin'))
    ).toStrictEqual({ password: 'admin' })
  })
})
