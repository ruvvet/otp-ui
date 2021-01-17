import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: { displayName: '', rank: '' },
  reducers: {
    // key is function name, value is the function
    setDisplayName(state, action) {
      // update the store inside this function
      state.displayName = action.payload;
    },

    setRank(state, action) {
      state.rank = action.payload;
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

export const { setDisplayName, setRank } = profileSlice.actions;

export default profileSlice.reducer;
