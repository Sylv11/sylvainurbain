import React, { useState, useRef, RefObject } from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import styled, { keyframes } from 'styled-components'

import defaultAvatar from './assets/img/avatar.svg'
import avatarSmile from './assets/img/avatar-smile.svg'
import { useSpeechBubbleText } from './hooks'
import { LangChooser } from './components/LangChooser'
import { Anchor } from './components/Anchor'
import { SpeakingAvatar } from './components/SpeakingAvatar'
import { Biography } from './components/Biography'
import blob from './assets/img/blob.svg'
import blob2 from './assets/img/blob2.svg'

interface IPosition {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
}

interface ILivingShapeProps {
    size?: number;
    position?: IPosition;
    speed: number;
}

const SubContainer = styled.div`
    height: 100vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const SubContainerTitle = styled.h1`
    font-weight: lighter;
    font-size: 60px;
    margin: 0;
    color: #FFF;
    user-select: none;
    font-family: 'evolve';
`

const animateBubble = keyframes`
    0 {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
`

const LivingBubble = styled.div`
    height: ${({ size }: ILivingShapeProps): number =>  size ? size : 50}px;
    width: ${({ size }: ILivingShapeProps): number => size ? size : 50}px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 0.2;
    position: absolute;
    animation: ${animateBubble} ${({ speed }: ILivingShapeProps): number => speed}s ease-in-out infinite;
    top: ${({ position }: ILivingShapeProps): string => position?.top ? `${position.top}px` : ''};
    left: ${({ position }: ILivingShapeProps): string => position?.left ? `${position.left}px` : ''};
    bottom: ${({ position }: ILivingShapeProps): string => position?.bottom ? `${position.bottom}px` : ''};
    right: ${({ position }: ILivingShapeProps): string => position?.right ? `${position.right}px` : ''};
    z-index: 10;
`

const LivingBlob = styled.img`
    opacity: 0.03;
    animation: ${animateBubble} ${({ speed }: ILivingShapeProps): number => speed}s ease-in-out infinite;
    position: absolute;
    top: ${({ position }: ILivingShapeProps): string => position?.top ? `${position.top}px` : ''};
    left: ${({ position }: ILivingShapeProps): string => position?.left ? `${position.left}px` : ''};
    bottom: ${({ position }: ILivingShapeProps): string => position?.bottom ? `${position.bottom}px` : ''};
    right: ${({ position }: ILivingShapeProps): string => position?.right ? `${position.right}px` : ''};
    height: ${({ size }: ILivingShapeProps): number =>  size ? size : 50}px;
    width: ${({ size }: ILivingShapeProps): number => size ? size : 50}px;
    pointer-events: none;
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
        <>
            <SubContainer>
                <LangChooser languages={['FR', 'EN']} setLanguage={setLanguage} />
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
                <LivingBubble size={190} position={{ right: '550', top: '200' }} speed={7} />
                <LivingBubble size={100} position={{ top: '350', left: '80' }} speed={6} />
                <LivingBubble size={75} position={{ bottom: '25', right: '350' }} speed={5} />
            </SubContainer>
            <SubContainer>
                <LivingBlob src={blob} size={250} position={{ left: '40', top: '210' }} speed={5} alt="blob" />
                <LivingBlob src={blob2} size={250} position={{ right: '40', top: '50' }} speed={7} alt="blob2" />
                <LivingBubble size={200} position={{ bottom: '10', right: '300' }} speed={6} />
                <Biography biographyPartRef={biographyPartRef} />
            </SubContainer>
        </>
    )
}

export default Home