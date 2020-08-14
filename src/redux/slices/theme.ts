import { createSlice } from '@reduxjs/toolkit' 

import { DARK_THEME } from '../../constants/themes'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: DARK_THEME,
  reducers: {
      setTheme: (state, { payload }) => state = payload,
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer