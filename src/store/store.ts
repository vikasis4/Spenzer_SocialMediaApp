import { configureStore } from '@reduxjs/toolkit'
import profileReduce from './slices/profile/sliceProfile'
import sliceChats from './slices/chats/sliceChats'

export const store = configureStore({
  reducer: {
    profile: profileReduce,
    chat: sliceChats
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch