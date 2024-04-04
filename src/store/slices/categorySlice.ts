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
            img: 'https://brand.am/gi/5852887400115-Aparan-Tan-0.2l.jpg'
        },
        {
            id: 2,
            title: 'ՀԱՅ ՋՈՒՐ',
            slug: 'jur',
            img: 'https://5.imimg.com/data5/TE/DM/MY-44148833/1-liter-mineral-water-bottles-500x500.jpg'
        },
        {
            id: 3,
            title: 'ՀՅՈՒԹԵՐ',
            slug: 'hyuter',
            img: 'https://mamul.am/images/photos/160309/citrusi-charashahumy-n80986-1.jpg'
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