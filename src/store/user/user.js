import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: '',
        name: '',
        email: '',
        avatar: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.name
            state.name = action.payload.name
            state.email = action.payload.email
            state.avatar = action.payload.avatar
        },
        login: (state) => { }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, login } = userSlice.actions

export default userSlice.reducer