import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
  status: 'idle',
  error: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducer: {},
  extraReducers: () => {},
});

export default blogsSlice.reducer;
