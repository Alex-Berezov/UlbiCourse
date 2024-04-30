import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/AddCommentForm'

const initialState: AddCommentFormSchema = {
  text: '',
  error: '',
}

export const AddCommentFormSlice = createSlice({
  name: 'AddCommentForm',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUserName.pending, (state, action) => {
  //       state.error = undefined
  //       state.isLoading = true
  //     })
  //     .addCase(loginByUserName.fulfilled, (state, action) => {
  //       state.isLoading = false
  //     })
  //     .addCase(loginByUserName.rejected, (state, action) => {
  //       state.isLoading = false
  //       state.error = action.payload
  //     })
  // },
})

export const { actions: AddCommentFormActions } = AddCommentFormSlice
export const { reducer: AddCommentFormReducer } = AddCommentFormSlice
