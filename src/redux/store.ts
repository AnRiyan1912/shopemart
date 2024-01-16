import { configureStore } from "@reduxjs/toolkit";
import productReducers from  "../redux/ecommerce/productSlice"
import loadingReducers from "../redux/ecommerce/loadingSlice";
import authReducers from "./ecommerce/authSlice";

export const store = configureStore({
  reducer: {
    products: productReducers,
    loading: loadingReducers,
    auth: authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch