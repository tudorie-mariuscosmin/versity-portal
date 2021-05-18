import { createSlice } from '@reduxjs/toolkit'

export const universitiesSlice = createSlice({
    name: 'universities',
    initialState: {
        universities: []
    },
    reducers: {
        fetchUnis: state => {

        },
        setUnis: (state, action) => {
            state.universities = action.payload
        }
    }
})

export const { fetchUnis, setUnis } = universitiesSlice.actions

export default universitiesSlice.reducer