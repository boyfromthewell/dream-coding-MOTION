import {configureStore} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import motionSlice from "./motionSlice"

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const store=configureStore({
    reducer:{
        motion:motionSlice
    }
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();