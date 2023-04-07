import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter-reducer';
import { loadState } from './localstorage';


export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


const persistedState = loadState();
export const store = configureStore({
  reducer: counterReducer,
});

//@ts-ignore
window.store = store;