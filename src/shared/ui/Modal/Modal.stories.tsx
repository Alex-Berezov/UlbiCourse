import type { Meta, StoryObj } from '@storybook/react'

import Modal from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ModalDark: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
