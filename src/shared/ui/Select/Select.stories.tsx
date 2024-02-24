import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import Select from './Select'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'

const meta = {
  title: 'shared/Select',
  component: Select,
  decorators: [withRouter, StyleDecorator],
  args: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Label',
    options: [
      { value: '1', content: 'Option 1' },
      { value: '2', content: 'Option 2' },
      { value: '3', content: 'Option 3' },
    ],
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
