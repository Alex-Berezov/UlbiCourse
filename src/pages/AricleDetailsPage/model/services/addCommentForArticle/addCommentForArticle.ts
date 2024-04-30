import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { getArticleDetailsData } from 'entities/Aricle/model/selectors/articleDetails'
import { Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { fetchCommentsByArtileId } from '../fetchCommentsByArtileId/fetchCommentsByArtileId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetail/addCommentForArticle', async (text, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi

  const userData = getUserAuthData(getState())
  const article = getArticleDetailsData(getState())

  if (!userData || !text || !article) {
    return rejectWithValue(i18n.t('errorMsg'))
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      text,
      articleId: article.id,
      userId: userData.id,
    })

    if (!response.data) {
      throw new Error()
    }

    dispatch(fetchCommentsByArtileId(article.id))

    return response.data
  } catch (error) {
    return rejectWithValue(i18n.t('errorMsg'))
  }
})
