import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProviders'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeLightIcon } from 'shared/assets/icons/ThemeLightIcon'
import { ThemeDarkIcon } from 'shared/assets/icons/ThemeDarkIcon'

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
      {theme === Theme.LIGHT ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </Button>
  )
})

export default ThemeSwitcher
