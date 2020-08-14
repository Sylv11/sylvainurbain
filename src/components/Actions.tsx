import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import { LangChooser } from './LangChooser'
import { ThemeChooser } from './ThemeChooser'
import { LANGUAGES } from '../constants/globals'
import { setTheme } from '../redux/slices/theme'
import { IThemeProps } from '../interfaces'
import { LIGHT_THEME, DARK_THEME } from '../constants/themes'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

const ActionsContainer = styled.div`
    position: fixed;
    top: 15px;
    right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

export const Actions = (): JSX.Element => {
  const dispatch = useDispatch()
  const theme: IThemeProps = useSelector(({ theme }: RootStateOrAny) => theme)
  const { i18n }: UseTranslationResponse = useTranslation()

  const toggleTheme = (): void => {
    dispatch(setTheme(theme.mode === LIGHT_THEME.mode ? DARK_THEME : LIGHT_THEME))  
  }

  const setLanguage = async (language: string): Promise<void> => {
    localStorage.setItem('lang', language)
    await i18n.changeLanguage(language)
  }

  return (
    <ActionsContainer>
        <LangChooser languages={LANGUAGES} setLanguage={setLanguage} />
        <ThemeChooser toggleTheme={toggleTheme} />
    </ActionsContainer>
  )
}