import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatResponse } from '../interfaces';

const initialState: {
  chats: ChatResponse[];
  onlineChats: string[];
} = {
  chats: [],
  onlineChats: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats(state, action: PayloadAction<typeof initialState['chats']>) {
      state.chats = action.payload;
    },

    setOnlineChats(state, action: PayloadAction<string[]>) {
      state.onlineChats = action.payload;
    },

    setOnlineChat(state, action: PayloadAction<string>) {
      state.onlineChats = Array.from(
        new Set([...state.onlineChats, action.payload])
      );
    },

    setOfflineChat(state, action: PayloadAction<string>) {
      state.onlineChats = state.onlineChats.filter((c) => c !== action.payload);
    },
  },
});

export const {
  setChats,
  setOnlineChats,
  setOnlineChat,
  setOfflineChat,
} = chatSlice.actions;
export default chatSlice.reducer;
