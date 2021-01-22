import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import matchReducer from './matchSlice';
import chatReducer from './chatSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
  match: matchReducer,
  chat: chatReducer,
});

export default configureStore({
  reducer: rootReducer,
});
