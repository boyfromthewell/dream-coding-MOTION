import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MotionState {
    title:string;
    body:string;
    type:string;
}
const initialState:object[]=[]

const motionSlice=createSlice({
    name:"motion",
    initialState,
    reducers:{
        ADD_MOTION(state, action:PayloadAction<MotionState>){
            state.push(action.payload)
        }
    }
})

export const {ADD_MOTION} = motionSlice.actions;
export default motionSlice.reducer;
