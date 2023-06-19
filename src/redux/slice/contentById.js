import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  content: [],
  error: "",
  isLoading: false,
};

export const fetchContentById = createAsyncThunk("contentid", async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.data;
  return data;
});

const countById = createSlice({
  name: "contentid",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContentById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContentById.fulfilled, (state, action) => {
      state.content = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContentById.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = true;
    });
  },
});

export default countById.reducer;
