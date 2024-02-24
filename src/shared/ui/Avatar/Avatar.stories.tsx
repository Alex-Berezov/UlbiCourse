import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import Avatar from './Avatar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import avatar from 'shared/assets/images/avatar.jpg'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  decorators: [withRouter, StyleDecorator],
  args: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    size: '100px',
    src: avatar,
    alt: 'avatar',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Small: Story = {
  args: {
    size: '50px',
    src: avatar,
    alt: 'avatar',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
