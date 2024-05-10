import { StateSchema } from 'app/providers/StorePropvider'
import { ArticleView } from 'entities/Aricle/model/types/article'

export const getArticlesPageIsLoaidng = (state: StateSchema) =>
  state.articlesPage?.isLoading || false

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.GRID

export const getArticlesPageNum = (state: StateSchema) =>
  state.articlesPage?.page || 1

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 8

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore
