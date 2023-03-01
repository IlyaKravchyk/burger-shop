import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoryReducer from './reducers/categorySlice';
import productCategoryReducer from "./reducers/productCategorySlice";

const rootReducer = combineReducers({
   category: categoryReducer,
   productCategory: productCategoryReducer
})

export const store = configureStore({
   reducer: rootReducer
})