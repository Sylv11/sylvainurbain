import React, { useState, useRef, RefObject } from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next';
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

const Home = (): JSX.Element => {
    const [avatar, setAvatar] = useState<string>(defaultAvatar)
    const { t, i18n }: UseTranslationResponse = useTranslation()
    const biographyPartRef: RefObject<HTMLDivElement> = useRef(null)
    const speechBubbleRef: RefObject<HTMLParagraphElement> = useRef(null)
    const speechBubbleText: string = useSpeechBubbleText('welcome', biographyPartRef)

    const setLanguage = async (language: string): Promise<void> => {
        localStorage.setItem('lang', language)
        await i18n.changeLanguage(language)
    }

    const handleMouseEnter = (): void => setAvatar(avatarSmile)

    const handleMouseLeave = (): void => setAvatar(defaultAvatar)

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
                />
                <Anchor />
            </SubContainer>
            <SubContainer>
                <Biography biographyPartRef={biographyPartRef} />
            </SubContainer>
        </div>
    )
}

export default Home