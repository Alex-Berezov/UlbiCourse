import { FC, memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import SidebarItem from '../SidebarItem/SidebarItem'
import { SidebarItemType, SidebarItemsList } from '../../model/items'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((item: SidebarItemType) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed]
  )

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.navItems}>{itemsList}</div>

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
})

export default Sidebar
