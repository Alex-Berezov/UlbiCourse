import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import Skeleton from './Skeleton'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  decorators: [withRouter, StyleDecorator],
  args: {},
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    width: '100%',
    height: '30px',
    border: '3px',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Circle: Story = {
  args: {
    border: '50%',
    width: '100px',
    height: '100px',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: '30px',
    border: '3px',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: '100px',
    height: '100px',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
