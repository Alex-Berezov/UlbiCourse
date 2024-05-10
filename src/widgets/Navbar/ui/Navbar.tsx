import { FC, memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout())
    setIsAuthModal(false)
  }, [dispatch])

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={classNames(cls.links)}
          onClick={onLogOut}
        >
          {t('logOut')}
        </Button>
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classNames(cls.links)}
        onClick={onShowModal}
      >
        {t('logIn')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  )
})

export default Navbar
