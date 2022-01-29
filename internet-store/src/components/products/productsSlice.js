import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'meganav',
  initialState: {
    category: null,
    productItems: null
  },
  reducers: {
    setProducts: (state, action) => {
      state.category = action.payload.category;
      state.productItems = action.payload.products;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
