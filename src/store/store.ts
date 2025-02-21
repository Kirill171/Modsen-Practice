import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '@/store/boardSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer
  }
});

store.subscribe(() => {
  localStorage.setItem('board', JSON.stringify(store.getState().board));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
