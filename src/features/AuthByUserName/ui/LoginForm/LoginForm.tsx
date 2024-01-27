import { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import cls from './LoginForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { ButtonTheme } from 'shared/ui/Button/Button'
import Text, { TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
  isOpen?: boolean
}

const LoginForm: FC<LoginFormProps> = ({ className, isOpen }) => {
  const { t } = useTranslation()
  const despatch = useDispatch<any>()
  const { userName, password, error, isLoading } = useSelector(getLoginState)

  useEffect(() => {
    if (!isOpen) {
      despatch(loginActions.clearError())
    }
  }, [isOpen, despatch])

  const onChangeUserName = useCallback(
    (value: string) => {
      despatch(loginActions.setUserName(value))
    },
    [despatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      despatch(loginActions.setPassword(value))
    },
    [despatch]
  )

  const onLoginClick = useCallback(() => {
    despatch(loginByUserName({ userName, password }))
  }, [despatch, userName, password])

  return (
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
  )
}

export default memo(LoginForm)
