import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { articleDetailsSchema } from '../types/articleDetailsSchema'
import { Article } from '../types/article'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'

const initialState: articleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchArticleById
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false
          state.data = action.payload
        }
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
