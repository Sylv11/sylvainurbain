import React from 'react'
import { render } from 'react-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import * as serviceWorker from './serviceWorker'
import en from './assets/languages/en.json'
import fr from './assets/languages/fr.json'
import { store, persistor } from './redux/store'
import { Router } from './Router'

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

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router />
            </PersistGate>
        </Provider>
    )
}

render(<App />, document.getElementById('root'))

serviceWorker.register()
