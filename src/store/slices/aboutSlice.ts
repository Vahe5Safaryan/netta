import {createSlice} from '@reduxjs/toolkit'

export type TAbout = {
    title?: string,
    description?: string,
    img?: string,
    page?: boolean,
}

export type TAboutState = {
    about: TAbout
}

const initialState: TAboutState = {
    about: {
        title: 'Մեր աշխատանքի մասին',
        description: '<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> <p>  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' + '\n' +  'Why do we use it?\n' +
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>',
        img: 'https://plus.unsplash.com/premium_photo-1661288476077-228228c5ff7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
}

export const aboutSlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        changAbout(state, action) {
            state.about = action.payload
        }
    }
})

export const {changAbout} = aboutSlice.actions

export default aboutSlice.reducer