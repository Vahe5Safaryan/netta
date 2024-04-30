import { createSlice } from '@reduxjs/toolkit'

export type TSlider = {
    id: number | string,
    title?: string,
    description?: string,
    img?: string,
}

export type THomeState = {
    sliders: TSlider[]
}

const initialState: THomeState = {
    sliders: [
        {
            id: 1,
            title: 'ԱՊԱՐԱՆ ԹԱն',
            img: 'https://images.unsplash.com/photo-1630409346699-79481a79db52?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            title: 'ԱՊԱՐԱՆ ՋՈՒՐ',
            img: 'https://images.unsplash.com/photo-1554140426-5e830b73a5e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            title: 'ԱՊԱՐԱՆ ՀՅՈՒԹ',
            img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
}

export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        changeSlider (state, action) {
            state.sliders = action.payload
        }
    }
})

export const { changeSlider } = homeSlice.actions

export default homeSlice.reducer