import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IChatBubble, IMainState, TApperanceMode } from './types'


// Define the initial state using that type
const initialState: IMainState = {
    chats: [],
    user_datails: {
        id: 658,
        name: "Paulos Ab",
        phone_number: "+234 1023 203 3045",
        profile_image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/521.jpg"
    },
    showDropdown: false,
    mode: 'light'
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateChatBubble: (state, action: PayloadAction<IChatBubble>) => {
      state.chats.push(action.payload)
    },
    setShowDropdown: (state, action: PayloadAction<boolean>) => {
      state.showDropdown = action.payload
    },
    setAppearanceMode:  (state, action: PayloadAction<TApperanceMode>) => {
      state.mode = action.payload
    },
  },
})

export const { 
    updateChatBubble,
    setShowDropdown,
    setAppearanceMode
 } = mainSlice.actions

export default mainSlice.reducer