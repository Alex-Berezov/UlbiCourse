import { FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import cls from './LoginForm.module.scss'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { ButtonTheme } from 'shared/ui/Button/Button'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPasswoed/getLoginPasswoed'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const userName = useSelector(getLoginUserName)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ userName, password }))
      .then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          if (onSuccess) {
            onSuccess()
          }
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [dispatch, userName, password, onSuccess])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAftrerUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('authForm')} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          type="text"
          className={cls.input}
          value={userName}
          onChange={onChangeUserName}
          placeholder={t('login')}
        />
        <Input
          type="password"
          className={cls.input}
          value={password}
          onChange={onChangePassword}
          placeholder={t('password')}
        />
        <Button
          theme={ButtonTheme.OUTLINED}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('logIn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(LoginForm)
