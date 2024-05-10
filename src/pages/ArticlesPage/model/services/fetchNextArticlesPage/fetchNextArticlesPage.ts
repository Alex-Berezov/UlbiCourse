import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoaidng,
  getArticlesPageNum,
} from '../../selectors/ariclesPageSelectors'
import { articlesPageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
  undefined,
  undefined,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch, rejectWithValue } = thunkApi
  const hasMore = getArticlesPageHasMore(getState())
  const page = getArticlesPageNum(getState())
  const isLoading = getArticlesPageIsLoaidng(getState())

  if (!hasMore) {
    return rejectWithValue('No more articles to fetch')
  }

  if (isLoading) {
    return rejectWithValue('Fetch in progress')
  }

  dispatch(articlesPageActions.setPage(page + 1))
  await dispatch(fetchArticlesList({ page: page + 1 }))

  return undefined
})
