import { createSlice } from "@reduxjs/toolkit";

const loadDataInLocalStorage = (data) => {
   localStorage.setItem('oderData', JSON.stringify(data))
}

const initialState = {
   orderData: JSON.parse(localStorage.getItem('oderData')) || []
}

const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {
      addToOrder(state, action) {
         const indexInArray = state.orderData.findIndex(item => item.id === action.payload.id)
         if (indexInArray != -1) {
            state.orderData[indexInArray].count += 1
         } else {
            state.orderData.push(action.payload)
         }
         loadDataInLocalStorage(state.orderData)
      },
      countIncrement(state, action) {
         state.orderData.map(item => {
            if (item.id === action.payload) {
               item.count += 1
            }
            loadDataInLocalStorage(state.orderData)
         })
      },
      countDecrement(state, action) {
         state.orderData.map((item) => {
            if (item.id === action.payload) {
               item.count -= 1
            }
            loadDataInLocalStorage(state.orderData)
         })
      },
      deleteProduct(state, action) {
         state.orderData = state.orderData.filter(item => item.id !== action.payload)
         loadDataInLocalStorage(state.orderData)

      }

   }
})

export default orderSlice.reducer

export const { addToOrder, countIncrement, countDecrement, deleteProduct } = orderSlice.actions