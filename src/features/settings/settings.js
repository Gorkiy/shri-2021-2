import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    value: {
      repository: '',
      build: 'npm ci && npm run build',
      branch: '',
      syncDuration: '10'
    }
  },
  reducers: {
    updateSettings: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;