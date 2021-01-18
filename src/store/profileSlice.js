import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    displayName: '',
    rank: '',
    pics: {},
    socials: {},
    mainAtt: '',
    mainDef: '',
  },
  reducers: {
    // key is function name, value is the function
    setDisplayName(state, action) {
      // update the store inside this function
      state.displayName = action.payload;
    },

    setRank(state, action) {
      state.rank = action.payload;
    },

    setPics(state, action) {
      state.pics = action.payload;
    },

    setSocials(state, action) {
      state.socials = action.payload;
    },

    setMainAtt(state, action) {
      state.mainAtt = action.payload;
    },

    setMainDef(state, action) {
      state.mainDef = action.payload;
    },

    initializeProfile(state, action) {
      state.displayName = action.payload.displayName || '';
      state.rank = action.payload.rank || '';
      state.pics = action.payload.pictures.reduce(
        (result, pic) => {
          result[pic.index] = pic.url;
          return result;
        },
        { picOne: '', picTwo: '', picThree: '' }
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
