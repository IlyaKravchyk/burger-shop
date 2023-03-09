import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

const initialState = {
   products: [],
   error: '',
   loading: false
}

export const asyncRequestProductCategories = createAsyncThunk(
   'productCategory/asyncRequestProductCategories',
   async (category) => {
      const response = await fetch(`${API_URL}/api/product?category=${category}`)
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