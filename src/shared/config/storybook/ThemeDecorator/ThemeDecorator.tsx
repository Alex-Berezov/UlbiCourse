/* eslint-disable react/display-name */
import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import { ReactNode, useEffect } from 'react'

interface BodyClassProps {
  theme: string
  children: ReactNode
}

const BodyClass: React.FC<BodyClassProps> = ({ theme, children }) => {
  useEffect(() => {
    document.body.classList.add(theme)

    return () => {
      document.body.classList.remove(theme)
    }
  }, [theme])

  return <>{children}</>
}

export const ThemeDecorator = (theme: Theme) => (StoryComponents: StoryFn) =>
  (
    <BodyClass theme={theme}>
      <StoryComponents />
    </BodyClass>
  )
