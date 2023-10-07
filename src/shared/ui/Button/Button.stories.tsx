import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonSize, ButtonTheme } from './Button'
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
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlinedLight: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlinedLightSiseM: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlinedLightSiseL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlinedLightSiseXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
