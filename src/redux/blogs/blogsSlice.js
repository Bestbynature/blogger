import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:8000/blogs';

const initialState = {
  blogs: [],
  status: 'idle',
  error: null,
  loading: false,
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const postBlogs = createAsyncThunk('blogs/postBlogs', async () => {
  try {
    const response = await axios.post(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducer: {},
  // immer library spread operator
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => (
        { ...state, status: 'loading', loading: true }
      ))
      .addCase(fetchBlogs.fulfilled, (state, action) => (
        { ...state, status: 'succeeded', blogs: action.payload }
      ))
      .addCase(fetchBlogs.rejected, (state, action) => (
        { ...state, status: 'failed', error: action.error.message }
      ))
      .addCase(postBlogs.pending, ()=>{} )
      .addCase(postBlogs.fulfilled, ()=>{})
      .addCase(postBlogs.rejected, ()=>{});
  },
});

export default blogsSlice.reducer;
