import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { SidebarItemType } from '../../model/items'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { item, collapsed } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.link, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <p className={cls.linkText}>{t(item.text)}</p>
    </AppLink>
  )
}

export default SidebarItem
