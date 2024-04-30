import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AddCommentForm from './AddCommentForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { withRouter } from 'storybook-addon-react-router-v6'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'

const meta = {
  title: 'feature/AddCommentForm',
  component: AddCommentForm,
  decorators: [withRouter, StyleDecorator],
} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
}
