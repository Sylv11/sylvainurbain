import { IThemeProps } from '../interfaces'
import { WHITE, PURPLE } from './globals'

export const DARK_THEME: IThemeProps = {
  mode: 'dark',
  colors: {
    backgroundColor: PURPLE,
    homeTitle: WHITE,
    speechBubble: WHITE,
    speechBubbleText: PURPLE,
    languageChooser: WHITE,
    anchor: WHITE,
    shapes: 'linear-gradient(#EC5DC1, #D61A6F)',
  }
} as const

export const LIGHT_THEME: IThemeProps = {
  mode: 'light',
  colors: {
    backgroundColor: WHITE,
    homeTitle: PURPLE,
    speechBubble: 'rgba(70, 24, 110, 0.7)',
    speechBubbleText: WHITE,
    languageChooser: PURPLE,
    anchor: PURPLE,
    shapes: 'linear-gradient(#EC5DC1, #D61A6F)',
  }
} as const