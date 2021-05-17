import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: '',
        name: '',
        email: '',
        avatar: '',
        uni: "",
        liked: []
    },
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid
            state.name = action.payload.name
            state.email = action.payload.email
            state.avatar = action.payload.avatar
            state.uni = action.payload.university
            state.liked = action.payload.liked
        },
        login: state => { },
        fetchUser: state => { },
        addLikePost: (state, action) => {
            state.liked.push(action.payload)
        },
        removeLikedPost: (state, action) => {
            const postIndex = state.liked.indexOf(action.payload)
            state.liked.splice(postIndex, 1)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, login, fetchUser, addLikePost, removeLikedPost } = userSlice.actions

export default userSlice.reducer