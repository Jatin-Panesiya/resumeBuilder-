import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
};

export const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        personalData: (state, action) => {
            const { username, email, phone, address } = action.payload;
            state.users = [{ name:username, email, phone, address }];
        }
    }
})

export const { personalData } = mainReducer.actions
export default mainReducer.reducer 