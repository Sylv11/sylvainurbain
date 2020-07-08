import React, { useState, useRef, RefObject } from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import styled, { keyframes, css, FlattenSimpleInterpolation } from 'styled-components'

import defaultAvatar from './assets/img/avatar.svg'
import avatarSmile from './assets/img/avatar-smile.svg'
import { useSpeechBubbleText } from './hooks'
import { LangChooser } from './components/LangChooser'
import { Anchor } from './components/Anchor'
import { SpeakingAvatar } from './components/SpeakingAvatar'
import { Biography } from './components/Biography'
import { IShapeProps } from './interfaces'
import { 
    bubblesFirstSubcontainer, 
    blobsProps, 
    bubblesSecondSubcontainer, 
    craters
} from './constants/shapes'
import { languages } from './constants/globals'

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
const shapesStyle = css`
    position: absolute;
    animation: ${({ animated, speed }: IShapeProps): '' | FlattenSimpleInterpolation => animated ? css`${animateBubble} ${speed}s ease-in-out infinite` : ''};
    ${({ size, position: { top, bottom, left, right } }: IShapeProps): string => `
        top: ${top ? `${top}px` : ''};
        bottom: ${bottom ? `${bottom}px` : ''};
        left: ${left ? `${left}px` : ''};
        right: ${right ? `${right}px` : ''};
        height: ${size ? size : 50}px;
        width: ${size ? size : 50}px;
    `}
`
const LivingBubble = styled.div`
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 0.2;
    z-index: 1;
    ${shapesStyle}
`
const LivingBlob = styled.img`
    opacity: 0.03;
    pointer-events: none;
    user-select: none;
    ${shapesStyle}
`

const ActionsContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const sunrise = keyframes`
    0% {
        box-shadow: none;
    }
`

const rays = keyframes`
    0% {
        box-shadow: 
            inset 6px 0px #DDC20B, 
            0 0 0 0 #FFDE0080,
            0 0 0 2px #FFDE0080,
            0 0 0 4px #FFDE0040,
            0 0 0 6px #FFDE0020,
            0 0 0 8px #FFDE0010,
            0 0 4px 10px #FFDE0010;
    }
    100% {
        box-shadow: 
            inset 6px 0px #DDC20B, 
            0 0 0 2px #FFDE0080,
            0 0 0 4px #FFDE0040,
            0 0 0 6px #FFDE0020,
            0 0 0 8px #FFDE0010,
            0 0 0 10px #FFDE0000,
            0 0 4px 10px #FFDE0010;
    }
`

const Sun = styled.div`
    width: 50px;
    height: 50px;
    background-color: #FFDE00;
    border-radius: 50%;
    box-shadow:
        inset 6px 0px #DDC20B, 
        0 0 0 2px #FFDE0080,
        0 0 0 4px #FFDE0040,
        0 0 0 6px #FFDE0020,
        0 0 0 8px #FFDE0010,
        0 0 0 10px #FFDE0000,
        0 0 4px 10px #FFDE0010;
    animation:
        ${sunrise} 0s infinite linear forwards,
        ${rays} 2s 0s infinite linear;
    
    &:hover, &:focus {
        cursor: pointer;
    }
`

const glow = keyframes`
    0% {
        box-shadow: 
            inset 4px 0px #A2B5BF, 
            0 0 2px 2px rgba(255, 255, 255, 0.4);
    }
    50% {
        box-shadow: 
            inset 4px 0px #A2B5BF, 
            0 0 2px 3px rgba(255, 255, 255, 0.4);
    }
    100% {
        box-shadow: 
            inset 4px 0px #A2B5BF, 
            0 0 2px 2px rgba(255, 255, 255, 0.4);
    }
`

const Moon = styled.div`
    background-color: #CAD9DD;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 4px solid #A2B5BF;
    box-shadow: 
        inset 4px 0px #A2B5BF, 
        0 0 2px 2px rgba(255, 255, 255, 0.4);
    transform: scale(-1, 1);
    transform: rotate(220deg);
    position: relative;
    animation: ${glow} 2s infinite linear forwards;

    &:hover, &:focus {
        cursor: pointer;
    }
`

const Crater = styled.div`
    background-color: #A2B5BF;
    ${({ size, position: { top, bottom, left, right } }: IShapeProps): string => `
        top: ${top ? `${top}px` : ''};
        bottom: ${bottom ? `${bottom}px` : ''};
        left: ${left ? `${left}px` : ''};
        right: ${right ? `${right}px` : ''};
        height: ${size ? size : 10}px;
        width: ${size ? size : 10}px;
    `}
    border-radius: 50%;
    box-shadow: inset 1.5px 0px #859ba9;
    transform: rotate(180deg);
    position: absolute;
    border: 1px solid #CAD9DD;
`

const Home = (): JSX.Element => {
    const [avatar, setAvatar] = useState<string>(defaultAvatar)
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const { t, i18n }: UseTranslationResponse = useTranslation()
    const biographyPartRef: RefObject<HTMLDivElement> = useRef(null)
    const speechBubbleRef: RefObject<HTMLParagraphElement> = useRef(null)
    const speechBubbleText: string = useSpeechBubbleText('welcome', biographyPartRef)

    const buildLivingBubbles = (shapesToBuild: IShapeProps[]): JSX.Element[] => shapesToBuild.map(({ size, position, speed, animated }: IShapeProps, index: number): JSX.Element => <LivingBubble size={size} position={position} speed={speed} animated={animated} key={index} />)
    const buildLivingBlobs = (shapesToBuild: IShapeProps[]): JSX.Element[] => shapesToBuild.map(({ src, size, position, speed, alt, animated }: IShapeProps, index: number): JSX.Element => <LivingBlob src={src} size={size} position={position} speed={speed} alt={alt} animated={animated} key={index} />)
    const buildCraters = (shapesToBuild: IShapeProps[]): JSX.Element[] => shapesToBuild.map(({ size, position }: IShapeProps, index: number): JSX.Element => <Crater size={size} position={position} key={index} />)
    
    const setLanguage = async (language: string): Promise<void> => {
        localStorage.setItem('lang', language)
        await i18n.changeLanguage(language)
    }

    const handleMouseEnter = (): void => setAvatar(avatarSmile)

    const handleMouseLeave = (): void => setAvatar(defaultAvatar)

    const toggleClick = (): void => isClicked ? setIsClicked(false) : setIsClicked(true)

    return (
        <>
            <SubContainer>
                <ActionsContainer>
                    <LangChooser languages={languages} setLanguage={setLanguage} />
                    {
                        isClicked
                        ?
                        (
                            <Moon onClick={toggleClick} >
                                {buildCraters(craters)}
                            </Moon>
                        )
                        :
                        <Sun onClick={toggleClick} />
                    }
                </ActionsContainer>
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
                {buildLivingBubbles(bubblesFirstSubcontainer)}
            </SubContainer>
            <SubContainer>
                {buildLivingBlobs(blobsProps)}
                {buildLivingBubbles(bubblesSecondSubcontainer)}
                <Biography biographyPartRef={biographyPartRef} />
            </SubContainer>
        </>
    )
}

export default Home