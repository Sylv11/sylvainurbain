import { createSlice } from '@reduxjs/toolkit' 

import { LIGHT_THEME } from '../constants/themes'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: LIGHT_THEME,
  reducers: {
      setTheme: (state, { payload }) => state = payload,
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer