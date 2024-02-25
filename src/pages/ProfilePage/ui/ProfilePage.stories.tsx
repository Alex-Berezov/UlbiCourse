import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { withRouter } from 'storybook-addon-react-router-v6'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { Country, Currency } from 'shared/const/common'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [withRouter, StyleDecorator],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        form: {
          firstName: 'Alex',
          lastName: 'Berezov',
          age: 41,
          currency: Currency.EUR,
          country: Country.Germany,
          city: 'Moscow',
          userName: 'admin',
          avatar:
            'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
      },
    }),
  ],
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          firstName: 'Alex',
          lastName: 'Berezov',
          age: 41,
          currency: Currency.EUR,
          country: Country.Germany,
          city: 'Moscow',
          userName: 'admin',
          avatar:
            'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
      },
    }),
  ],
}
