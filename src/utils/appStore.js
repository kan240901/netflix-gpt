import {configureStore} from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import movieReducer from './movieSlice';
import gptSearchReducer from './gptSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gptSearch: gptSearchReducer,
    },
});

export default appStore;