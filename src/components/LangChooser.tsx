import React from 'react'
import styled from 'styled-components'

import { IThemeProviderProps } from '../interfaces'
import { DARK } from '../constants/globals'

const LangContainer = styled.div`
  display: flex;
  margin-right: 15px;
`

const LangItem = styled.span`
  margin-right: 15px;
  color: ${({ theme }: IThemeProviderProps): string => theme?.colors?.languageChooser ?? DARK};
  transition: 0.3s;

  &:hover, &:focus {
    cursor: pointer;
    margin-top: 5px;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }: IThemeProviderProps): string => theme?.colors?.languageChooser ?? DARK};
    transition: width .3s;
}

&:hover::after {
    width: 100%;
    transition: width .3s;
}
`

interface IProps {
  languages: string[];
  setLanguage:  (language: string) => Promise<void>;
}

export const LangChooser = ({ 
  languages, 
  setLanguage,
}: IProps): JSX.Element => {
  return (
    <LangContainer>
      {
        languages.map((language: string, index: number): JSX.Element => 
          <LangItem 
            onClick={(): Promise<void> => setLanguage(language.toLowerCase())} 
            key={index}
          >
            {language}
          </LangItem>)
      }
    </LangContainer>
  )
}
