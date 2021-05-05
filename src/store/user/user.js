import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: ''
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        login: (state) => { }
    },
})

// Action creators are generated for each case reducer function
export const { setName, login } = userSlice.actions

export default userSlice.reducer