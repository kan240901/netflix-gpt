import { createSlice } from '@reduxjs/toolkit';

const gptSearchSlice = createSlice({
        name: 'gptSearch',
        initialState: {
            gptSearchClick: false,
            gptMovies: null,
            gptOutputMovies:null,
        },
    reducers: {
        gptSearchClick: (state, action) => {
            state.gptSearchClick = action.payload;
        },
        gptMovieResult:(state,action)=>{
            state.gptMovies = action.payload;
        },
        gptOutputMovies:(state,action)=>{
            state.gptOutputMovies = action.payload;
        }
    },
});

export const { gptSearchClick,gptMovieResult,gptOutputMovies } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
