import React from 'react'
import ReactDOM from 'react-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Home from './Home'
import * as serviceWorker from './serviceWorker'
import en from './assets/languages/en.json'
import fr from './assets/languages/fr.json'
import evolveRegular from './assets/fonts/evolve_thin_evo.otf'
import kiona from './assets/fonts/kiona.ttf'
import { lightTheme } from './constants/themes'
import { darkTheme } from './constants/themes'
import { IThemeProviderProps } from './interfaces'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'evolve';
        src: url(${evolveRegular}) format('opentype');
    }

    @font-face {
        font-family: 'kiona';
        src: url(${kiona}) format('truetype');
    }

    html, body {
        font-family: 'Muli', sans-serif;
        font-weight: lighter;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }: IThemeProviderProps): string => theme?.colors?.background ?? '#280E3E'};
        scroll-behavior: smooth;
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

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,
            fr,
        },
        lng: localStorage.getItem('lang') || 'en',
        fallbackLng: 'en',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
    })

ReactDOM.render(
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <Home />
        </ThemeProvider>, 
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
