import type { Meta, StoryObj } from '@storybook/react'

import ArticleList from './ArticleList'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { withRouter } from 'storybook-addon-react-router-v6'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ArticleView } from '../../model/types/article'

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  decorators: [withRouter, StyleDecorator],
} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const LoadingGRID: Story = {
  args: {
    isLoaing: true,
    articles: [],
    view: ArticleView.GRID,
  },
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
}

export const LoadingLIST: Story = {
  args: {
    isLoaing: true,
    articles: [],
    view: ArticleView.LIST,
  },
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
}
