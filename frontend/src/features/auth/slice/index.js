import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const authAdapter = createEntityAdapter();

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    getUser(state, action) {},
    updateUser(state, action) {
      state.credential = action.payload;
    },
  },
});
