import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileResponse } from '../interfaces';

const initialState: {
  discordId: string;
  displayName: string;
  rank: string;
  pics: {
    picOne: string;
    picTwo: string;
    picThree: string;
  };
  socials: {
    twitch: string;
    twitter: string;
    instagram: string;
    snapchat: string;
    tiktok: string;
    spotify: string;
    facebook: string;
    reddit: string;
  };
  mainAtt: string;
  mainDef: string;
  discordAvatar: string;
  lastActive: string;
} = {
  discordId: '',
  displayName: '',
  rank: '',
  pics: {
    picOne: '',
    picTwo: '',
    picThree: '',
  },
  socials: {
    twitch: '',
    twitter: '',
    instagram: '',
    snapchat: '',
    tiktok: '',
    spotify: '',
    facebook: '',
    reddit: '',
  },
  mainAtt: '',
  mainDef: '',
  discordAvatar: '',
  lastActive: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // key is function name, value is the function
    setDisplayName(state, action: PayloadAction<string>) {
      // update the store inside this function
      state.displayName = action.payload;
    },

    setRank(state, action: PayloadAction<string>) {
      state.rank = action.payload;
    },

    setPics(state, action: PayloadAction<typeof initialState['pics']>) {
      state.pics = action.payload;
    },

    setSocials(state, action: PayloadAction<typeof initialState['socials']>) {
      state.socials = action.payload;
    },

    setMainAtt(state, action: PayloadAction<string>) {
      state.mainAtt = action.payload;
    },

    setMainDef(state, action: PayloadAction<string>) {
      state.mainDef = action.payload;

      //return {
      // ...state,
      // mainDef:action.payload
      //}
    },

    initializeProfile(state, action: PayloadAction<ProfileResponse>) {
      state.discordId = action.payload.discordId;
      state.displayName =
        action.payload.displayName || action.payload.discordUsername;
      state.rank = action.payload.rank || 'Unranked';
      state.pics = action.payload.pictures.reduce(
        (result, pic) => {
          result[pic.index] = pic.url;
          return result;
        },
        {
          picOne: `https://cdn.discordapp.com/avatars/${action.payload.discordId}/${action.payload.discordAvatar}.png`,
          picTwo: '',
          picThree: '',
        }
      );
      state.socials = {
        twitch: action.payload.twitch || '',
        twitter: action.payload.twitter || '',
        instagram: action.payload.instagram || '',
        snapchat: action.payload.snapchat || '',
        tiktok: action.payload.tiktok || '',
        spotify: action.payload.spotify || '',
        facebook: action.payload.facebook || '',
        reddit: action.payload.reddit || '',
      };
      state.mainAtt = action.payload.att || '';
      state.mainDef = action.payload.def || '';
      state.discordAvatar = action.payload.discordAvatar || '';
      state.lastActive = action.payload.lastActive;
    },
  },
});

// const action = { type: 'SETDISPLAYNAME', payload: 'jenny' };
// switch(action.type){
//      case 'SETDISPLAYNAME':
// state.displayName = action.payload
// break
// case 'SETRANK':
// ...

//}

// return state

// redux flow
// 1. dispatch an action
// 2. run all the reducers against the action
// 3. reducers return the new state

export const {
  setDisplayName,
  setRank,
  setPics,
  setSocials,
  setMainAtt,
  setMainDef,
  initializeProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
