import { createSlice } from '@reduxjs/toolkit';

const matchSlice = createSlice({
  name: 'match',
  initialState: {
    matchNotification: 0,
    chatNotification: 0,
    matches: [],
  },
  reducers: {
    setMatches(state, action) {
      state.matches = action.payload;
    },
    setMatchNotification(state, action) {
      state.matchNotification = action.payload;
    },
    setChatNotification(state, action) {
      state.chatNotification = action.payload;
    },
  },
});

export const {
  setMatchNotification,
  setChatNotification,
  setMatches,
} = matchSlice.actions;
export default matchSlice.reducer;
