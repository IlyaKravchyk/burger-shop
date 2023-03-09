import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

const initialState = {
   categoryData: [],
   error: '',
   loading: false
}

export const asyncRequestAllCategory = createAsyncThunk(
   'categorySlice/asyncRequestAllCategory',
   async () => {
      const response = await fetch(`${API_URL}/api/product/category`)
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
