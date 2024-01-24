import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/axios";
import { AuthCustomer } from "../../models/AuthModels";

const initialState = {
  user: {
    token: "",
    role: "",
  },
  statusLogin: {
    status: false,
  },
  customer: {
    id: "",
    customerName: "",
    address: "",
    phone: "",
    email: "",
  },
};

export const asyncLogin = createAsyncThunk(
  "auth/loginAsync",
  async (authData: AuthCustomer) => {
    const response = await api.post("/auth/login", authData);
    return response.data;
  }
);

export const getUserAdminById = createAsyncThunk(
  "/admin/id",
  async (userId: string) => {
    const responseAdmin = await api.get(`/admin/${userId}`);
    return responseAdmin.data;
  }
);
export const getUserCustomerById = createAsyncThunk(
  "/customer/id",
  async (userId: string) => {
    const responseCustomer = await api.get(`/customer/${userId}`);
    return responseCustomer.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.customer.id = "";
      state.customer.customerName = "";
      state.customer.address = "";
      state.customer.email = "";
      state.customer.phone = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncLogin.fulfilled, (state, action) => {
        state.user = { ...action.payload.data };
        state.statusLogin.status = true;
        localStorage.setItem("auth", state.user.token);
      })
      .addCase(asyncLogin.rejected, (state, action) => {
        console.log("Login failed", action.error);
      })
      .addCase(getUserAdminById.fulfilled, (state, action) => {
        state.customer.id = action.payload.data.id;
        state.customer.customerName = action.payload.data.name;
        state.customer.phone = action.payload.data.phoneNumber;
      })
      .addCase(getUserAdminById.rejected, (state, action) => {
        if (action.error) localStorage.removeItem("auth");
        console.log(action.error);
      })
      .addCase(getUserCustomerById.fulfilled, (state, action) => {
        state.customer = { ...action.payload.data };
      })
      .addCase(getUserCustomerById.rejected, (state, action) => {
        if (action.error) localStorage.removeItem("auth");
        console.log(action.error);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
