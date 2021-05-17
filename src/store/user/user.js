import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: '',
        name: '',
        email: '',
        avatar: '',
        uni: ""
    },
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid
            state.name = action.payload.name
            state.email = action.payload.email
            state.avatar = action.payload.avatar
            state.uni = action.payload.university
        },
        login: state => { },
        fetchUser: state => { }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, login, fetchUser } = userSlice.actions

export default userSlice.reducer