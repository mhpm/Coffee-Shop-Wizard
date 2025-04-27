import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import bagReducer from './slices/bag/bagSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    user: userReducer,
    bag: bagReducer,
  },
  // Add the middleware configuration with proper typing
  middleware: (getDefaultMiddleware) => {
    // Add logger only in development environment
    if (process.env.NODE_ENV === 'development') {
      return getDefaultMiddleware().concat(logger);
    }
    return getDefaultMiddleware();
  },
  // DevTools extension is enabled by default in development
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState, ...}
export type AppDispatch = typeof store.dispatch;
