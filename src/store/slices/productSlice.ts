import {createSlice} from '@reduxjs/toolkit'

export type TProductAttribute = {
    name: string,
    value: string
}

export type TProduct = {
    id: number | string,
    title: string,
    description?: string,
    attributes: TProductAttribute[],
    categoryId: string | number,
    img?: string,
}

export type TCategoryState = {
    products: TProduct[]
}

const initialState: TCategoryState = {
    products: [
        {
            id: 1,
            title: 'ԱՊԱՐԱՆ ԹԱՆ',
            description: 'Բաղադրությունը` մածուն, աղ, ջուր, յուղ` 0.5գ, ածխաջուր` 2.0գ, սպիտակուց` 1.5գ, Էներգետիկ արժեքը` 100 գրամում` 19 կկալ: Պահպանման, ժամկետը`15 օր: Պահել մութ, չոր +2-+4℃ պայմաններում:',
            categoryId: 1,
            attributes: [{
                name: 'Չափ',
                value: '0.33',
            }],
            img: 'http://aparantan.am/Images/1597304435_home3.jpg'
        },
        {
            id: 2,
            title: 'ՀԱՅ ՋՈՒՐ',
            description: 'Բաղադրությունը` մածուն, աղ, ջուր, յուղ` 0.5գ, ածխաջուր` 2.0գ, սպիտակուց` 1.5գ, Էներգետիկ արժեքը` 100 գրամում` 19 կկալ: Պահպանման, ժամկետը`15 օր: Պահել մութ, չոր +2-+4℃ պայմաններում:',
            categoryId: 1,
            attributes: [{
                name: 'Չափ',
                value: '0.5',
            }],
            img: 'http://aparantan.am/Images/1597304393_home1.jpg'
        },
        {
            id: 3,
            title: 'ՀՅՈՒԹԵՐ',
            description: 'Բաղադրությունը` մածուն, աղ, ջուր, յուղ` 0.5գ, ածխաջուր` 2.0գ, սպիտակուց` 1.5գ, Էներգետիկ արժեքը` 100 գրամում` 19 կկալ: Պահպանման, ժամկետը`15 օր: Պահել մութ, չոր +2-+4℃ պայմաններում:',
            categoryId: 1,
            attributes: [{
                name: 'Չափ',
                value: '1',
            }],
            img: 'http://aparantan.am/Images/1597304415_home2.jpg'
        },
        {
            id: 4,
            title: 'ՀՅՈՒԹԵՐ',
            description: 'Բաղադրությունը` մածուն, աղ, ջուր, յուղ` 0.5գ, ածխաջուր` 2.0գ, սպիտակուց` 1.5գ, Էներգետիկ արժեքը` 100 գրամում` 19 կկալ: Պահպանման, ժամկետը`15 օր: Պահել մութ, չոր +2-+4℃ պայմաններում:',
            categoryId: 1,
            attributes: [{
                name: 'Չափ',
                value: '1.5',
            }],
            img: 'http://aparantan.am/Images/1597304415_home2.jpg'
        },
        {
            id: 5,
            title: 'ՀՅՈՒԹԵՐ',
            description: 'Բաղադրությունը` մածուն, աղ, ջուր, յուղ` 0.5գ, ածխաջուր` 2.0գ, սպիտակուց` 1.5գ, Էներգետիկ արժեքը` 100 գրամում` 19 կկալ: Պահպանման, ժամկետը`15 օր: Պահել մութ, չոր +2-+4℃ պայմաններում:',
            categoryId: 1,
            attributes: [{
                name: 'Չափ',
                value: '2',
            }],
            img: 'http://aparantan.am/Images/1597304415_home2.jpg'
        }
    ]
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        changeProducts(state, action) {
            state.products = action.payload
        }
    }
})

export const {changeProducts} = productSlice.actions

export default productSlice.reducer