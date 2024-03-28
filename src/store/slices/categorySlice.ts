import { createSlice } from '@reduxjs/toolkit'

export type TCategory = {
    id: number | string,
    title: string,
    description?: string,
    img?: string,
    slug?: string
}

export type TCategoryState = {
    categories: TCategory[]
}

const initialState: TCategoryState = {
    categories: [
        {
            id: 1,
            title: 'ԱՊԱՐԱՆ ԹԱՆ',
            slug: 'aparantan',
            img: 'http://aparantan.am/Images/1597304435_home3.jpg'
        },
        {
            id: 2,
            title: 'ՀԱՅ ՋՈՒՐ',
            slug: 'jur',
            img: 'http://aparantan.am/Images/1597304393_home1.jpg'
        },
        {
            id: 3,
            title: 'ՀՅՈՒԹԵՐ',
            slug: 'hyuter',
            img: 'http://aparantan.am/Images/1597304415_home2.jpg'
        }
    ]
}

export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        changeCategories (state, action) {
            state.categories = action.payload
        }
    }
})

export const { changeCategories } = categorySlice.actions

export default categorySlice.reducer