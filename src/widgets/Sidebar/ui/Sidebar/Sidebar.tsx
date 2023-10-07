import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t: tHome } = useTranslation('home')
  const { t: tAbout } = useTranslation('about')
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.navItems}>
        <AppLink to={RoutePath.main} className={classNames(cls.link)}>
          <MainIcon className={cls.icon} />
          <p className={cls.linkText}>{tHome('mainPage')}</p>
        </AppLink>

        <AppLink to={RoutePath.about} className={classNames(cls.link)}>
          <AboutIcon className={cls.icon} />
          <p className={cls.linkText}>{tAbout('aboutPage')}</p>
        </AppLink>
      </div>

      <Button
        className={cls.collapseBtn}
        data-testid="sidebarToggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

export default Sidebar
