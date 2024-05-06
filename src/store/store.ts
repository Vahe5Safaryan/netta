import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './slices/homeSlice'
import aboutReducer from "./slices/aboutSlice";
import contactReducer from "./slices/contactSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const store =  configureStore({
    reducer: {
        home: homeReducer,
        about: aboutReducer,
        contact: contactReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default store