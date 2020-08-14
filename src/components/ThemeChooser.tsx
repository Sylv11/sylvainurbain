import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { IThemeProps } from '../interfaces'
import { LIGHT_THEME } from '../constants/themes'
import { Moon } from './Moon'
import { Sun } from './Sun'
import { CRATERS } from '../constants/shapes'
import { CRATER_TYPE } from '../constants/globals'
import { buildShapes } from '../utils'

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
          (
            <Moon onClick={toggleTheme} >
                {buildShapes(CRATERS, CRATER_TYPE)}
            </Moon>
          )
        :
          <Sun onClick={toggleTheme} />
      }
    </>
  )
}