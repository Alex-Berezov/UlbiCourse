import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'shared/Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputLight: Story = {
  args: {
    placeholder: 'Placeholder text',
    value: 'Some test value',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const InputDark: Story = {
  args: {
    placeholder: 'Placeholder text',
    value: 'Some test value',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
