import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { useSelector, RootStateOrAny } from 'react-redux'
import { ThemeProvider, createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components'

import Home from './Home'
import evolveRegular from './assets/fonts/evolve_thin_evo.otf'
import kiona from './assets/fonts/kiona.ttf'
import { IThemeProviderProps, IThemeProps } from './interfaces'
import { PURPLE } from './constants/globals'
import { NotFound } from './components/NotFound'

const GlobalStyle: GlobalStyleComponent<IThemeProviderProps, DefaultTheme> = createGlobalStyle`
    @font-face {
        font-family: 'evolve';
        src: url(${evolveRegular}) format('opentype');
    }

    @font-face {
        font-family: 'kiona';
        src: url(${kiona}) format('truetype');
    }

    body {
        font-family: 'Muli', sans-serif;
        font-weight: lighter;
        height: 100vh;
        background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255, 0.1) 0%, rgba(255,255,255, 0) 35%) no-repeat;
        background-color: ${({ theme }: IThemeProviderProps): string => theme?.colors?.backgroundColor ?? PURPLE};
        scroll-behavior: smooth;
        transition: 0.3s;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.9);
        border-radius: 5px;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: linear-gradient(175deg, #642399 28%, #411763 86%);
    }
`

export const Router = (): JSX.Element => {
  const theme: IThemeProps = useSelector(({ theme }: RootStateOrAny) => theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}
