import { createSlice } from "@reduxjs/toolkit";


export const projectReducer = createSlice({
    name:"project",
    initialState:[],
    reducers:{
        addProject :(state,action)=>{
            return [...state,action.payload]
        },
        removeProject : (state,action)=>{
            return state.filter((state) => state.id !== action.payload)
        }
    }
})

export const {addProject,removeProject} = projectReducer.actions
export default projectReducer.reducer