import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Comment } from 'entities/Comment'
import i18n from 'shared/config/i18n/i18n'

export const fetchCommentsByArtileId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArtileId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  if (!articleId) {
    return rejectWithValue(i18n.t('errorMsg'))
  }

  try {
    const response = await extra.api.get<Comment[]>('/comments', {
      params: {
        articleId,
        _expand: 'user',
      },
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    return rejectWithValue(i18n.t('errorMsg'))
  }
})
