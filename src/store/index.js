import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import notificationReducer from './notificationSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
  // notification: notificationReducer,
});

export default configureStore({
  reducer: rootReducer,
});
