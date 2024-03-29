import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import ArticlesPage from './ArticlesPage'

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
