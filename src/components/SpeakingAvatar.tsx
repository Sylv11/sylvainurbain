import React, { RefObject } from 'react'
import styled from 'styled-components'
import { UseTranslationResponse, useTranslation } from 'react-i18next'

import { IThemeProviderProps } from '../interfaces'
import { WHITE, DARK } from '../constants/globals'

const SpeechBubble = styled.div`
  position: fixed;
  bottom: 8vmin;
  right: 0;
  background: ${({ theme }: IThemeProviderProps): string => theme?.colors?.speechBubble ?? WHITE};
  width: 47vmin;
  height: 27vmin;
  clip-path: polygon(12% 12%, 70% 10%, 68% 45%, 44% 44%, 48% 61%, 30% 44%, 7% 45%);
  white-space: pre-line;
  z-index: 3;
`

const SpeechBubbleText = styled.p`
  color: ${({ theme }: IThemeProviderProps): string => theme?.colors?.speechBubbleText ?? DARK};
  display: inline-block;
  font-size: 2.5vmin;
  margin-left: 7vmin;
  margin-top: 4.5vmin;
`

const Avatar = styled.img`
  width: 27vmin;
  height: 27vmin;
  display: inline-block;
  position: fixed;
  bottom: 0;
  right: 0;
  user-select: none;
  z-index: 4;
`

interface IProps {
  avatar: string;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  speechBubbleRef: RefObject<HTMLParagraphElement>;
  speechBubbleText: string;
}

export const SpeakingAvatar = ({ 
  avatar,
  handleMouseEnter,
  handleMouseLeave, 
  speechBubbleRef, 
  speechBubbleText,
}: IProps): JSX.Element => {
  const { t }: UseTranslationResponse = useTranslation()

  return (
    <>
      <Avatar src={avatar} alt='avatar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
      <SpeechBubble>
          <SpeechBubbleText ref={speechBubbleRef}>
            {t(`${speechBubbleText}`)}
          </SpeechBubbleText>
      </SpeechBubble>
    </>
  )
}