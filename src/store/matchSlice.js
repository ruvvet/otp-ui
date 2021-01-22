import { createSlice } from '@reduxjs/toolkit';

const matchSlice = createSlice({
  name: 'match',
  initialState: {
    matchNotification: 0,

    matches: [],
  },
  reducers: {
    setMatches(state, action) {
      state.matches = action.payload;
    },
    setMatchNotification(state, action) {
      state.matchNotification = action.payload;
    },
  },
});

export const { setMatches, setMatchNotification } = matchSlice.actions;
export default matchSlice.reducer;
