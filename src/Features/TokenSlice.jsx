import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSignup = createAsyncThunk(
  "user/UserRegistration",
  async (data) => {
    const response = await axios.post(import.meta.env.VITE_SERVER_API + "/User/UserRegistration/", data);
    return response.data;
  }
)

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (data) => {
    const response = await axios.post(import.meta.env.VITE_SERVER_API + "/User/UserLogin/", data);
    return response.data;
  },
);

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
    isLoading: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.hasError = false
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })

      builder
      .addCase(userSignup.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.hasError = false
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })
  },
  reducers: {
  },
})

export const selectToken = state => state.token.value;
export const selectLoadingState = state => state.token.isLoading;
export const selectErrorState = state => state.token.hasError;

export default tokenSlice.reducer;