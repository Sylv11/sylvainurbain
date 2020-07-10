import { IThemeProps } from '../interfaces'
import { white, purple } from './globals'

export const darkTheme: IThemeProps = {
  mode: 'dark',
  colors: {
    background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(65,25,99,1) 0%, rgba(40,14,62,1) 42%)',
    homeTitle: white,
    speechBubble: white,
    speechBubbleText: purple,
    languageChooser: white,
    anchor: white,
    shapes: 'rgba(255, 255, 255, 0.05)',
  },
  other: {
    blobOpacity: '0.03',
  }
}

export const lightTheme: IThemeProps = {
  mode: 'light',
  colors: {
    background: white,
    homeTitle: purple,
    speechBubble: 'rgba(70, 24, 110, 0.8)',
    speechBubbleText: white,
    languageChooser: purple,
    anchor: purple,
    shapes: 'rgba(142, 24, 239, 0.15)',
  }, 
  other: {
    blobOpacity: '0.2',
  }
}