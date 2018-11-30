export default class Language {
   
    static setLanguage = () => {
        const availableLanguages = ['fr','en']
        let chosenLanguage

        if(!localStorage.getItem('lang')) {
            localStorage.setItem('lang','fr')
            chosenLanguage = require('../assets/languages/fr')
        }else {
            const localStoredLanguage = localStorage.getItem('lang')

            if(availableLanguages.includes(localStoredLanguage)) {
                chosenLanguage = require(`../assets/languages/${localStoredLanguage}`)
            }else {
                chosenLanguage = require('../assets/languages/fr')
            }
        }
        return chosenLanguage
    }

    static getText = (key) => {
        const language = Language.setLanguage().default
        return language[key]
    }
    
}