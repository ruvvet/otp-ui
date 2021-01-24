import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import matchReducer from './matchSlice';
import chatReducer from './chatSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
  match: matchReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
