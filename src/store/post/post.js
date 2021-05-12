import { createSlice } from '@reduxjs/toolkit'
export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
    },
    reducers: {
        pushPost: (state, action) => {
            state.posts.push(action.payload)
        },
        createPost: (state, action) => { }
    },
})

// Action creators are generated for each case reducer function
export const { createPost, pushPost } = postSlice.actions

export default postSlice.reducer