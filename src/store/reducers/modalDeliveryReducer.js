import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isOpen: false,
}

const modalDeliverySlice = createSlice({
   name: 'modalDelivery',
   initialState,
   reducers: {
      modalOpen(state) {
         state.isOpen = true;
         console.log('modalOpen');
      },
      modalClose(state) {
         state.isOpen = false;
      }
   }
})

export default modalDeliverySlice.reducer
export const { modalOpen, modalClose } = modalDeliverySlice.actions