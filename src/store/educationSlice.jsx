import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const educationSlice = createSlice({
    name:'education',
    initialState,
    reducers:{
        educationDataStore : (state,action)=>{
            return [...state, action.payload];
        },
        educationDataRemove: (state,action)=>{
            const idToRemove = action.payload;
            return state.filter((entry) => entry.id !== idToRemove);
        }
    }

})

export const {educationDataStore,educationDataRemove} = educationSlice.actions
export default educationSlice.reducer