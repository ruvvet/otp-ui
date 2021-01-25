import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MatchResponse } from '../interfaces';

const initialState: {
  matchNotification: number;
  matches: MatchResponse[];
} = {
  matchNotification: 0,
  matches: [],
};

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    setMatches(state, action: PayloadAction<typeof initialState['matches']>) {
      state.matches = action.payload;
    },
    setMatchNotification(state, action: PayloadAction<number>) {
      state.matchNotification = action.payload;
    },
  },
});

export const { setMatches, setMatchNotification } = matchSlice.actions;
export default matchSlice.reducer;
