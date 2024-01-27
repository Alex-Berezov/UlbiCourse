import type { Meta, StoryObj } from '@storybook/react'

import Text, { TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Some title',
    text: 'Some text, some text some text some text some text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Error: Story = {
  args: {
    title: 'Some title',
    text: 'Some text, some text some text some text some text',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OnlyTitle: Story = {
  args: {
    title: 'Some title',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OnlyText: Story = {
  args: {
    text: 'Some text, some text some text some text some text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const PrimaryDark: Story = {
  args: {
    title: 'Some title',
    text: 'Some text, some text some text some text some text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Some title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OnlyTextDark: Story = {
  args: {
    text: 'Some text, some text some text some text some text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
