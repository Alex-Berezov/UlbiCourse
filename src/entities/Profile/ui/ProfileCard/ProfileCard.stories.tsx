import type { Meta, StoryObj } from '@storybook/react'

import ProfileCard from './ProfileCard'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { withRouter } from 'storybook-addon-react-router-v6'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { Country, Currency } from 'shared/const/common'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  decorators: [withRouter, StyleDecorator],
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: {
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
  decorators: [
    StoreDecorator({
      loginForm: { userName: 'admin', password: '123' },
    }),
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [
    StoreDecorator({
      loginForm: { userName: 'admin', password: '123' },
    }),
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const WithError: Story = {
  args: {
    error: 'Some auth error',
  },
  decorators: [
    StoreDecorator({
      loginForm: { userName: 'admin', password: '123' },
    }),
    ThemeDecorator(Theme.LIGHT),
  ],
}
