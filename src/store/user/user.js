import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: '',
        name: '',
        email: '',
        avatar: '',
        uni: "",
        liked: [],
        loadingStatus: false
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
        },
        updateUser: (state, action) => {
            console.log(action.payload)
            state.name = action.payload.user.name;
            state.uni = action.payload.user.university
        },
        updateUserAvatar: (state, action) => {
            state.avatar = action.payload
        },
        logout: state => {
            localStorage.clear();
            state.uid = ""
            state.name = ""
            state.email = ""
            state.avatar = ""
            state.uni = ""
            state.liked = []
        },
        deleteAccount: state => { },
        setLoadingStatus: (state, action) => {
            state.loadingStatus = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, login, fetchUser, addLikePost, removeLikedPost, updateUser, updateUserAvatar, logout, deleteAccount, setLoadingStatus } = userSlice.actions

export default userSlice.reducer