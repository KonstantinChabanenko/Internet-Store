import { configureStore } from '@reduxjs/toolkit';
import meganavReducer from './components/megaNav/meganavSlice';
import productsReducer from './components/products/productsSlice';

export default configureStore({
    reducer: {
        meganav: meganavReducer,
        products: productsReducer
    },
});
