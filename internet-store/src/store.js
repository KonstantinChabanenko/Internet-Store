import { configureStore } from '@reduxjs/toolkit';
import meganavReducer from './components/megaNav/meganavSlice';
import productsReducer from './components/products/productsSlice';
import productReducer from './components/product/productSlice';

export default configureStore({
    reducer: {
        meganav: meganavReducer,
        products: productsReducer,
        product: productReducer
    },
});
