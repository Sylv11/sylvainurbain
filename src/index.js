import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './assets/languages/en.json'
import fr from './assets/languages/fr.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,
            fr,
        },
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
    })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
