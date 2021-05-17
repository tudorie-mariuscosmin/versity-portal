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
        createPost: (state,) => { },
        getPosts: (state) => { },
        setPosts(state, action) {
            state.posts = action.payload
        },
        likePost: (state, action) => {
            const postId = action.payload.postId
            const post = state.posts.find(post => post.id === postId)
            post.likes++
        },
        dislikePost: (state, action) => {
            const postId = action.payload.postId
            const post = state.posts.find(post => post.id === postId)
            post.likes--
        },
        addComment: (state, action) => {
            const postId = action.payload.postId
            const post = state.posts.find(post => post.id === postId)
            post.comments.push(action.payload.comment)
        }
    },
})

// Action creators are generated for each case reducer function
export const { createPost, pushPost, getPosts, setPosts, likePost, dislikePost, addComment } = postSlice.actions

export default postSlice.reducer