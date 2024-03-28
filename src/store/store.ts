import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './slices/homeSlice'
import categoryReducer from "./slices/categorySlice";
import productReducer from "./slices/productSlice";
import aboutReducer from "./slices/aboutSlice";
import contactReducer from "./slices/contactSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const store =  configureStore({
    reducer: {
        home: homeReducer,
        category: categoryReducer,
        product: productReducer,
        about: aboutReducer,
        contact: contactReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default store