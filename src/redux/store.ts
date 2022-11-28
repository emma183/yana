import {combineReducers, configureStore} from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import {setupListeners} from '@reduxjs/toolkit/query';
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { chatSlice } from './slice/chatSlice';
import {userSlice} from './slice/userSlice';


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ user: userSlice.reducer, chat: chatSlice.reducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const preloadedState = {};


export const store = configureStore({
  reducer: persistedReducer,
  preloadedState,
  devTools:__DEV__,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  //add lines by fixed error console persist redux
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(??.middleware),
});

const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export {persistor};
