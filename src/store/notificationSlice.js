import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  intialState: {
    matchNotification: 0,
    chatNotification: 0,
  },
  reducers: {
    MatchNotification(state, action) {
      state.matchNotification = action.payload || 0;
    },
    setChatNotification(state, action) {
      state.chatNotification = action.payload || 0;
    },
  },
});

export const {
  setMatchNotification,
  setChatNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;
