import { FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classNames(cls.links)}
        onClick={onToggleModal}
      >
        {t('logIn')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        logIn modal
      </Modal>
    </div>
  )
}

export default Navbar
