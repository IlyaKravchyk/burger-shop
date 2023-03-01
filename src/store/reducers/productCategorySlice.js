import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   products: [],
   error: '',
   loading: false
}

export const asyncRequestProductCategories = createAsyncThunk(
   'productCategory/asyncRequestProductCategories',
   async (category) => {
      const response = await fetch(`http://localhost:3024/api/product?category=${category}`)
      const data = await response.json()
      return data
   }
)

const productCategorySlice = createSlice({
   name: 'productCategory',
   initialState,
   extraReducers: {
      [asyncRequestProductCategories.pending]: (state) => {
         state.error = ''
         state.loading = true
      },
      [asyncRequestProductCategories.fulfilled]: (state, action) => {
         state.products = action.payload
         state.loading = false
      },
      [asyncRequestProductCategories.rejected]: (state, action) => {
         state.error = 'error'
      }
   }
})

export default productCategorySlice.reducer