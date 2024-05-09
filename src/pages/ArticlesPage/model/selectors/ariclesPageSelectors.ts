import { StateSchema } from 'app/providers/StorePropvider'
import { ArticleView } from 'entities/Aricle/model/types/article'

export const getArticlesPageIsLoaidng = (state: StateSchema) =>
  state.articlesPage?.isLoading || false

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.GRID
