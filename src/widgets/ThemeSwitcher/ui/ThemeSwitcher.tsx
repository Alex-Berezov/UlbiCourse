import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProviders'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
})

export default ThemeSwitcher
