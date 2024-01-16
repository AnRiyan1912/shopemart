import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Loading {
  loading: boolean;
}

const initialState: Loading = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<Loading>) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
