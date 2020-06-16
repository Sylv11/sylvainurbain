import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'

import defaultAvatar from './assets/img/avatar.svg'
import avatarSmile from './assets/img/avatar-smile.svg'
import { useSpeechBubbleText } from './hooks'
import { LangChooser } from './components/LangChooser';
import { Anchor } from './components/Anchor';
import { SpeakingAvatar } from './components/SpeakingAvatar';
import { Biography } from './components/Biography';

const SubContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SubContainerTitle = styled.h1`
    font-weight: lighter;
    font-size: 60px;
    margin: 0;
    color: #FFF;
    user-select: none;
`

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
            <SubContainer>
                <SubContainerTitle>
                    {t('hello')}
                </SubContainerTitle>
                <SpeakingAvatar 
                    avatar={avatar}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    speechBubbleRef={speechBubbleRef}
                    speechBubbleText={speechBubbleText}
                    t={t}
                />
                <Anchor />
            </SubContainer>
            <SubContainer>
                <Biography biographyPartRef={biographyPartRef} t={t}/>
            </SubContainer>
        </div>
    )
}

export default Home