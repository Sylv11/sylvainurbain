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
    shapes: 'rgba(255, 255, 255, 0.03)',
  },
  other: {
    blobOpacity: '0.03',
  }
} as const

export const LIGHT_THEME: IThemeProps = {
  mode: 'light',
  colors: {
    backgroundColor: WHITE,
    homeTitle: PURPLE,
    speechBubble: 'rgba(70, 24, 110, 0.8)',
    speechBubbleText: WHITE,
    languageChooser: PURPLE,
    anchor: PURPLE,
    shapes: 'rgba(142, 24, 239, 0.15)',
  }, 
  other: {
    blobOpacity: '0.2',
  }
} as const