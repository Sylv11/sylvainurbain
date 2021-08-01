import React from 'react'
import styled from 'styled-components'

import { IThemeProviderProps } from '../interfaces'
import { DARK } from '../constants/globals'
import { UseTranslationResponse, useTranslation } from 'react-i18next'

const SubContainerTitle = styled.h1`
    font-weight: lighter;
    font-size: 60px;
    margin: 0;
    color: ${({ theme }: IThemeProviderProps): string => theme?.colors?.homeTitle ?? DARK};
    user-select: none;
    font-family: 'evolve';
    z-index: 2;
`

export const MainTitle = (): JSX.Element => {
  const { t }: UseTranslationResponse = useTranslation()

  return (
    <SubContainerTitle>
        {t('hello')}
    </SubContainerTitle>
  )
}