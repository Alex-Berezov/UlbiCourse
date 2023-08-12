import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          to={'/'}
          className={classNames(cls.link)}
          theme={AppLinkTheme.SECONDARY}
        >
          Main
        </AppLink>
        <AppLink
          to={'/about'}
          className={classNames(cls.link)}
          theme={AppLinkTheme.SECONDARY}
        >
          About
        </AppLink>
      </div>
    </div>
  )
}

export default Navbar
