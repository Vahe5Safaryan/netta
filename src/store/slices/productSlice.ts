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
            img: 'https://brand.am/gi/5852887400115-Aparan-Tan-0.2l.jpg'
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
            img: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Aparan_Reservoir%2C_%D5%8E%D4%B1%D5%8D_02.jpg'
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
            img: 'https://mamul.am/images/photos/160309/citrusi-charashahumy-n80986-1.jpg'
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
            img: 'https://mamul.am/images/photos/160309/citrusi-charashahumy-n80986-1.jpg'
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
            img: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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