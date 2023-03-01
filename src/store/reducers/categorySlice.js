import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   categoryData: [],
   error: '',
   loading: false
}

export const asyncRequestAllCategory = createAsyncThunk(
   'categorySlice/asyncRequestAllCategory',
   async () => {
      const response = await fetch('http://localhost:3024/api/product/category')
      const data = await response.json()
      return data
   }
)

const categorySlice = createSlice({
   name: 'categorySlice',
   initialState,
   extraReducers: {
      [asyncRequestAllCategory.pending]: (state) => {
         state.loading = true;
         state.error = '';
      },
      [asyncRequestAllCategory.fulfilled]: (state, action) => {
         state.categoryData = action.payload;
         state.loading = false;
      },
      [asyncRequestAllCategory.rejected]: (state, action) => {
         state.error = 'error'
      }
   }
})

export default categorySlice.reducer;
