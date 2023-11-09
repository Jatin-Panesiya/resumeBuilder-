import { createSlice } from "@reduxjs/toolkit";


export const summaryReducer = createSlice({
    name:'summary',
    initialState:'',
    reducers:{
        addSummary:(state,action)=>{
            return action.payload
        },
        removeSummary:(state,action)=>{
            return action.payload
        }
    }
})

export const {addSummary,removeSummary} = summaryReducer.actions
export default summaryReducer.reducer