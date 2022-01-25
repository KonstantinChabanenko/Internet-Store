import { createSlice } from '@reduxjs/toolkit';

export const meganavSlice = createSlice({
  name: 'meganav',
  initialState: {
    open: false,
    categories: []
  },
  reducers: {
    setMegaNav: (state, action) => {
      state.categories = action.payload;
    },
    toggleMegaNav: (state, action) => {
      state.open = action.payload === undefined ? !state.open : action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setMegaNav, toggleMegaNav } = meganavSlice.actions;

export default meganavSlice.reducer;
