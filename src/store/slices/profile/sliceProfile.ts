import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ProfileState {
    value: number,
    name: string,
    username: string
}
const initialState: ProfileState = {
    value: 0,
    name: "",
    username: "",
}

type payload = {
    one: number,
    two: string
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<payload>) => {
            console.log(state);
        },
    },
})

export const { incrementByAmount } = profileSlice.actions
export default profileSlice.reducer