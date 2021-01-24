import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  matchNotification: number;
  matches: {
    time: string;
    liker: {
      discordId: string;
      discordUsername: string;
      discordAvatar: string;
      displayName: string;
      rank: string;
      att: string;
      def: string;
    };
  }[];
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
