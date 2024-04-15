import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import Code from './Code'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'

const meta = {
  title: 'shared/Code',
  component: Code,
  decorators: [withRouter, StyleDecorator],
  args: {},
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: `const Code: FC<CodeProps> = ({ className, children }) => {
  return (
    <pre>
      <code className={classNames(cls.Code, {}, [className])}>{children}</code>
    </pre>
  )
}`,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
