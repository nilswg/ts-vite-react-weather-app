import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  darkMode: boolean;
  loading: boolean;
  cityName: string;
  searchInput: string;
  searchResultVisible: boolean;
}

const initialState: AppState = {
  darkMode: JSON.parse(localStorage.getItem('dark_mode') ?? 'false') as boolean,
  loading: false,
  cityName: '',
  searchInput: '',
  searchResultVisible: false,
};

const reducers = {
  setDarkMode: (state: AppState) => {
    localStorage.setItem('dark_mode', (!state.darkMode).toString());
    state.darkMode = !state.darkMode;
  },
  setLoading: (state: AppState, action: { payload: boolean }) => {
    state.loading = action.payload;
  },
  setCityName: (state: AppState, action: { payload: string }) => {
    state.cityName = action.payload;
  },
  setSearchInput: (state: AppState, action: { payload: string }) => {
    state.searchInput = action.payload;
  },
  setSearchResultVisible: (state: AppState, action: { payload: boolean }) => {
    state.searchResultVisible = action.payload;
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export default appSlice;
