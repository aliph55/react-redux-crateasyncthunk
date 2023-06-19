import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  content: [],
  error: "",
  isLoading: false,
};

export const fetchContent = createAsyncThunk("content", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = await response.data;
  return data;
});

const contentSlice = createSlice({
  name: "content",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.content = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default contentSlice.reducer;
