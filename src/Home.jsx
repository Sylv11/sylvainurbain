import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';

import './assets/css/index.css'
import defaultAvatar from './assets/img/avatar.svg'
import avatarSmile from './assets/img/avatar-smile.svg'
import { useSpeechBubbleText } from './hooks'
import { LangChooser } from './components/LangChooser';
import { Anchor } from './components/Anchor';
import { SpeakingAvatar } from './components/SpeakingAvatar';
import { Biography } from './components/Biography';

const Home = () => {
    const [avatar, setAvatar] = useState(defaultAvatar)
    const { t, i18n } = useTranslation()
    const biographyPartRef = useRef(null)
    const speechBubbleRef = useRef(null)
    const speechBubbleText = useSpeechBubbleText('welcome', biographyPartRef)

    const setLanguage = async (language) => {
        localStorage.setItem('lang', language)
        await i18n.changeLanguage(language)
    }

    const handleMouseEnter = () => setAvatar(avatarSmile)

    const handleMouseLeave = () => setAvatar(defaultAvatar)

    return (
        <div id='main-container'>
            <LangChooser languages={['FR', 'EN']} setLanguage={setLanguage} />
            <div className='subcontainer start'>
                <h1>
                    {t('hello')}
                </h1>
                <SpeakingAvatar 
                    avatar={avatar}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    speechBubbleRef={speechBubbleRef}
                    speechBubbleText={speechBubbleText}
                    t={t}
                />
                <Anchor />
            </div>
            <div className='subcontainer middle'>
                <Biography biographyPartRef={biographyPartRef} t={t}/>
            </div>
        </div>
    )
}

export default Home