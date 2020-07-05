import { IThemeProps } from '../interfaces'

export const darkTheme: IThemeProps = {
  mode: 'dark',
  colors: {
    background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(65,25,99,1) 0%, rgba(40,14,62,1) 42%)',
  }
}

export const lightTheme: IThemeProps = {
  mode: 'light',
  colors: {
    background: '#FFF',
  }
}