import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POST_URL } from "../../const";

const initialState = {
   name: '',
   phone: '',
   address: '',
   floor: '',
   intercom: '',
   format: 'delivery'
}

export const sendFormData = createAsyncThunk(
   'form/sendFormData',
   async (dataBody) => {
      const response = await fetch(POST_URL, {
         method: 'POST',
         body: JSON.stringify(dataBody),
         header: {
            'Content-Type': 'application/json'
         }
      })
      const data = await response.json()
      return data
   }
)

const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      updateValue(state, action) {
         state[action.payload.name] = action.payload.value
      }
   },
   extraReducers: {
      [sendFormData.pending]: (state) => {
      },
      [sendFormData.fulfilled]: (state, action) => {
         state = action.payload
      },
      [sendFormData.rejected]: (state) => { }
   }
})

export default formSlice.reducer
export const { updateValue } = formSlice.actions