import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StorePropvider'
import { Comment } from 'entities/Comment'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { fetchCommentsByArtileId } from '../services/fetchCommentsByArtileId/fetchCommentsByArtileId'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const ArticleDetailsCommentsSlice = createSlice({
  name: 'ArticleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchArticleById
      .addCase(fetchCommentsByArtileId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchCommentsByArtileId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
        }
      )
      .addCase(fetchCommentsByArtileId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: ArticleDetailsCommentsReducer } =
  ArticleDetailsCommentsSlice
