import { configureStore } from '@reduxjs/toolkit';
import meganavReducer from './components/megaNav/meganavSlice';

export default configureStore({
    reducer: {
        meganav: meganavReducer
    },
});
