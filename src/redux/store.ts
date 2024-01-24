import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../redux/slices/productSlice";
import loadingReducers from "../redux/slices/loadingSlice";
import authReducers from "../redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    products: productReducers,
    loading: loadingReducers,
    auth: authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch