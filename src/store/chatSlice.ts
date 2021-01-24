import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  chatNotification: number;
  chats: {
    chat_senderId: string;
    receiver_discordId: string;
    receiver_discordUsername: string;
    receiver_discordAvatar: string;
    receiver_displayName: string;
    receiverId: string;
  }[];
} = {
  chatNotification: 0,
  chats: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats(state, action: PayloadAction<typeof initialState['chats']>) {
      state.chats = action.payload;
    },
    setChatNotification(state, action: PayloadAction<number>) {
      state.chatNotification = action.payload;
    },
  },
});

export const { setChats, setChatNotification } = chatSlice.actions;
export default chatSlice.reducer;
