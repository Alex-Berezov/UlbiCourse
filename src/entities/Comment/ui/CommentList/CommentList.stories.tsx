import type { Meta, StoryObj } from '@storybook/react'

import CommentList from './CommentList'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { withRouter } from 'storybook-addon-react-router-v6'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  decorators: [withRouter, StyleDecorator],
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'some comment',
        user: { id: '1', userName: 'user1' },
      },
      {
        id: '2',
        text: 'some comment 2',
        user: { id: '1', userName: 'user2' },
      },
    ],
  },
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
}

export const Loading: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'some comment',
        user: { id: '1', userName: 'user1' },
      },
      {
        id: '2',
        text: 'some comment 2',
        user: { id: '1', userName: 'user2' },
      },
    ],
    isLoading: true,
  },
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
}
