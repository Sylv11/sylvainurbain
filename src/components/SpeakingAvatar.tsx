import React, { RefObject } from 'react'
import styled from 'styled-components'
import { UseTranslationResponse, useTranslation } from 'react-i18next'

import { IThemeProviderProps } from '../interfaces'
import { WHITE, DARK } from '../constants/globals'

const SpeechBubble = styled.div`
  position: fixed;
  bottom: 60px;
  right: 0;
  background: ${({ theme }: IThemeProviderProps): string => theme?.colors?.speechBubble ?? WHITE};
  width: 350px;
  height: 200px;
  clip-path: polygon(12% 12%, 70% 10%, 68% 45%, 44% 44%, 48% 61%, 30% 44%, 7% 45%);
  white-space: pre-line;
  z-index: 3;
`

const SpeechBubbleText = styled.p`
  color: ${({ theme }: IThemeProviderProps): string => theme?.colors?.speechBubbleText ?? DARK};
  display: inline-block;
  font-size: 19px;
  margin-left: 45px;
  margin-top: 35px;
`

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  display: inline-block;
  position: fixed;
  bottom: 0;
  right: 0;
  user-select: none;
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