import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: '',
        name: '',
        email: '',
        avatar: '',
        uni: localStorage.getItem('uni') || ""
    },
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid
            state.name = action.payload.name
            state.email = action.payload.email
            state.avatar = action.payload.avatar
        },
        login: (state) => { },
        setUni: (state, action) => {
            localStorage.setItem('uni', action)
            state.uni = action;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, login, setUni } = userSlice.actions

export default userSlice.reducer