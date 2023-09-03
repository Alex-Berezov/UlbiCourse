import type { Meta, StoryObj } from '@storybook/react'

import Button, { ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const WithClass: Story = {
  args: {
    className: 'test',
    children: 'Text',
  },
}

export const ClearLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlinedLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
