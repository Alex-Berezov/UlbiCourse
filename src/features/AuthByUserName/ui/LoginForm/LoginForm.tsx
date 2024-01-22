import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onLoginChange = (val: string) => {
    setLogin(val)
  }

  const onPasswordChange = (val: string) => {
    setPassword(val)
  }

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        value={login}
        onChange={onLoginChange}
        placeholder={t('login')}
      />
      <Input
        type="password"
        className={cls.input}
        value={password}
        onChange={onPasswordChange}
        placeholder={t('password')}
      />
      <Button className={cls.loginBtn}>{t('logIn')}</Button>
    </div>
  )
}

export default LoginForm
