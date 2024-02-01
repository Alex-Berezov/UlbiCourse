import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface loginByUserNameProps {
  userName: string
  password: string
}

export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  { rejectValue: string }
>('login/loginByUserName', async (authData, thunkAPI) => {
  console.log('====================================')
  console.log('authData >>>', authData)
  console.log('====================================')
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData
    )

    if (!response.data) {
      throw new Error()
    }

    console.log('====================================')
    console.log('response.data', response.data)
    console.log('====================================')

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    thunkAPI.dispatch(userActions.setAuthData(response.data))

    return response.data
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(i18n.t('authError'))
  }
})
