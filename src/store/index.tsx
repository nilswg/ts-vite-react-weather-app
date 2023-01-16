import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AppSlice from './appSlice';

/**
 * app state
 */
export const { setDarkMode, setLoading, setCityName } = AppSlice.actions;

/**
 * selectors
 */
export const selectCityName = (state: RootState) => {
  return state.app.cityName;
};
export const selectDarkMode = (state: RootState) => {
  return state.app.darkMode;
};
export const selectLoading = (state: RootState) => {
  return state.app.loading;
};

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import {
  TypedUseSelectorHook,
  useDispatch as hookUseDispatch,
  useSelector as hookUseSelector,
} from 'react-redux';

// 不要直接用store.getState(), useSelector會在你store發生改變時重新渲染，省掉"訂閱"部分
export const useDispatch = () => hookUseDispatch<AppDispatch>();

// redux會自動幫我們創建context
export const useSelector: TypedUseSelectorHook<RootState> = hookUseSelector;
