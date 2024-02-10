import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider/config/StateSchema'
import { User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export interface loginByUserNameProps {
  userName: string
  password: string
}

export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  ThunkConfig<string>
>('login/loginByUserName', async (authData, thunkApi) => {
  const { dispatch, rejectWithValue, extra } = thunkApi

  try {
    const response = await extra.api.post<User>('/login', authData)

    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    dispatch(userActions.setAuthData(response.data))

    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(i18n.t('authError'))
  }
})
