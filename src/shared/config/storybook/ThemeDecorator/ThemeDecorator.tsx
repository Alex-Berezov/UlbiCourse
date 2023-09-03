/* eslint-disable react/display-name */
import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'

export const ThemeDecorator = (theme: Theme) => (StoryComponents: StoryFn) =>
  (
    <div className={`app ${theme}`}>
      <StoryComponents />
    </div>
  )
