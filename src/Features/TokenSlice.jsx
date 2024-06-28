import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const cookieExpiration = 86400;       // One day

export const userSignup = createAsyncThunk(
  "user/UserRegistration",
  async (data) => {
    const response = await axios.post(import.meta.env.VITE_SERVER_API + "/User/UserRegistration/", data);
    return response.data;
  }
);

export const userLogin = createAsyncThunk(
  "user/UserLogin",
  async (data) => {
    const response = await axios.post(import.meta.env.VITE_SERVER_API + "/User/UserLogin/", data);
    return response.data;
  },
);

export const refreshToken = createAsyncThunk(
  "user/RefreshToken",
  async () => {
    let token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

    const response = await axios.get(import.meta.env.VITE_SERVER_API + "/User/RefreshToken", {headers: {Authorization: token}});
    return response.data;
  }
)

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
    isLoading: false,
    hasError: false
  },
  reducers: {
    userLogout: (state, action) => {
      state.value = "";
      state.isLoading = false;
      state.hasError = false;

      document.cookie = "token=; Max-Age=0"
    },
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
        state.hasError = false;

        document.cookie = `token=${state.value}; Max-Age=${cookieExpiration}`
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

        document.cookie = `token=${state.value}; Max-Age=${cookieExpiration}`
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })

      builder
      .addCase(refreshToken.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.hasError = false

        document.cookie = `token=${state.value}; Max-Age=${cookieExpiration}`
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })
  },
})

export const selectToken = state => state.token.value;
export const selectLoadingState = state => state.token.isLoading;
export const selectErrorState = state => state.token.hasError;

export const { userLogout } = tokenSlice.actions;

export default tokenSlice.reducer;