import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import ThemeSwitcher from './ThemeSwitcher'

const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    className: 'test',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  args: {
    className: 'test',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
