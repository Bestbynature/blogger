import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:8000/blogs';

const initialState = {
  blogs: [],
  status: 'idle',
  error: null,
  loading: false,
  count: 0,
  name: 'Gideon',
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const postBlogs = createAsyncThunk('blogs/postBlogs', async (newBlog) => {
  try {
    const response = await axios.post(url, newBlog);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
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
      .addCase(postBlogs.pending, (state) => (
        { ...state, loading: false }
      ))
      .addCase(postBlogs.fulfilled, (state, action) => (
        {
          ...state, status: 'succeeded', loading: false, blogs: [...state.blogs, action.payload],
        }
      ));
  // .addCase(postBlogs.rejected, (state) => {});
  },
});

export default blogsSlice.reducer;

export const { increaseCount, decreaseCount } = blogsSlice.actions;
