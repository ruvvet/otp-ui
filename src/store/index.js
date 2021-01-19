import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
});

export default configureStore({
  reducer: rootReducer,
});
