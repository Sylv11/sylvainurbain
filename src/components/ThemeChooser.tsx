import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { IThemeProps } from '../interfaces'
import { LIGHT_THEME } from '../constants/themes'
import { Moon } from './Moon'
import { Sun } from './Sun'

interface IProps {
  toggleTheme: () => void
}

export const ThemeChooser = ({ toggleTheme }: IProps): JSX.Element => {
  const theme: IThemeProps = useSelector(({ theme }: RootStateOrAny) => theme)

  return (
    <>
      {
        theme.mode === LIGHT_THEME.mode
        ?
          <Moon onClick={toggleTheme} />
        :
          <Sun onClick={toggleTheme} />
      }
    </>
  )
}