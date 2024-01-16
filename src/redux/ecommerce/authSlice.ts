import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthCustomer {
  id: string;
  username: string;
  email: string;
  password: string;
}

const initialState = {
  customer: {
    id: "1231221",
    username: "andreriyanto",
    email: "andre@gmail.com",
    password: "andre123",
  },
  statusLogin: {
    status: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<AuthCustomer>) => {
      if (
        (state.customer.email === action.payload.email &&
          state.customer.password === action.payload.password) ||
        (state.customer.username === action.payload.username &&
          state.customer.password &&
          action.payload.password)
      ) {
        state.statusLogin.status = true;
      }
    },
  },
});

export const { onLogin } = authSlice.actions;
export default authSlice.reducer;
