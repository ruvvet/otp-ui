import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import matchReducer from './matchSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
  match: matchReducer,
});

export default configureStore({
  reducer: rootReducer,
});
