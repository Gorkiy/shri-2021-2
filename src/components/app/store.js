import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from '../../features/settings/settings';

export default configureStore({
  reducer: {
    settings: settingsReducer
  },
})