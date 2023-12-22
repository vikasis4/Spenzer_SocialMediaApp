import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
    msg: string;
}
const initialState: ChatState = {
    msg: "Hai popsy"
}

type payload = {
    dataset: string,
    counters: number
}

const sliceProfile = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        updateMsg: (state) => {
            state.msg = "no new msg"
        },
        downMsg: (state, action:PayloadAction<payload>) => {

        }
    }
})

export const { updateMsg, downMsg } = sliceProfile.actions;
export default sliceProfile.reducer