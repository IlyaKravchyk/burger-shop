import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoryReducer from './reducers/categorySlice';
import orderReducer from "./reducers/orderSlice";
import productCategoryReducer from "./reducers/productCategorySlice";
import modalDeliveryReducer from "./reducers/modalDeliveryReducer";
import formReducer from "./reducers/formSlice";

const rootReducer = combineReducers({
   category: categoryReducer,
   productCategory: productCategoryReducer,
   order: orderReducer,
   modal: modalDeliveryReducer,
   form: formReducer
})

export const store = configureStore({
   reducer: rootReducer
})