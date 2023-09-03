import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import PageLoader from './PageLoader'

const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  decorators: [withRouter],
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    className: 'test',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  args: {
    className: 'test',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
