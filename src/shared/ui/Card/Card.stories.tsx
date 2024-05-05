import type { Meta, StoryObj } from '@storybook/react'

import Card from './Card'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'shared/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Text from Card',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
