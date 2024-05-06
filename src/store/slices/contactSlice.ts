import {createSlice} from '@reduxjs/toolkit'

export type TContactState = {
    email: string,
    phone: string,
    address: string
}

const initialState: TContactState = {
    email: 'info@netta.am',
    phone: '+374 (00) 00 00 00',
    address: 'Example street in Example city'
}

export const contactSlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        changeContact(state, action) {
            state.email = action.payload.email
            state.phone = action.payload.phone
        }
    }
})

export const {changeContact} = contactSlice.actions

export default contactSlice.reducer