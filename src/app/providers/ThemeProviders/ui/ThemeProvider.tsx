import { FC, useMemo, useState, ReactNode, useEffect } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  useEffect(() => {
    document.body.classList.remove(Theme.LIGHT, Theme.DARK)
    document.body.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
