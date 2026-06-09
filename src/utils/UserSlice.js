import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        languageChange: 'en'
    },
    reducers: {
        addUser: (state, action) => {
            state.addUser = action.payload;
        },
        removeUser: (state, action) => {
            return null;
        },
        languageChange: (state, action) => {
            state.languageChange = action.payload;
        }
    },
});

export const { addUser, removeUser, languageChange } = UserSlice.actions;
export default UserSlice.reducer;
