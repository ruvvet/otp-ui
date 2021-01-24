import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatNotification: 0,
    chats: [],
  },
  reducers: {
    setChats(state, action) {
      state.chats = action.payload;
    },
    setChatNotification(state, action) {
      state.chatNotification = action.payload;
    },
  },
});

export const { setChats, setChatNotification } = chatSlice.actions;
export default chatSlice.reducer;
