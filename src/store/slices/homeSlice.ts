import { createSlice } from '@reduxjs/toolkit'

export type TSlider = {
    id: number | string,
    title?: string,
    description?: string,
    img: string,
}

export type THomeState = {
    sliders: TSlider[]
}

const initialState: THomeState = {
    sliders: [
        {
            id: 1,
            title: 'ԱՊԱՐԱՆԻ ԿԱՏՈՒ',
            img: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            title: 'ԱՊԱՐԱՆԻ ԹԱՆ',
            img: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            title: 'POXOS POXOSYAN',
            img: 'https://media.istockphoto.com/id/1603671533/photo/cute-dog-walks-in-a-meadow-on-green-grass.jpg?s=2048x2048&w=is&k=20&c=toAu2axU8TUo1286xmhusZutLniB-0U8FkWpWH9B-tk='
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