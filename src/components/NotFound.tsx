import React from 'react'
import styled from 'styled-components'

import { Actions } from './Actions'
import { PURPLE } from '../constants/globals'
import { IThemeProviderProps } from '../interfaces'
import { Moon } from './Moon'
import { buildShapes } from '../utils'

const NotFoundContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }: IThemeProviderProps): string => theme?.colors?.backgroundColor ?? PURPLE};
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to right bottom, #75278B, #5530A2);  
  ${({ width, height, zIndex }: ICircleProps): string => `
    width: ${width}vmin;
    height: ${height}vmin;
    z-index: ${zIndex};
  `}
  border-radius: 50%;
  box-shadow: 0px 0px 20px -8px #000;
`

const FoursContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  justify-content: space-between;
  font-size: 100px;
  font-weight: 900;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  user-select: none;
  color: #FFF;
  font-family: evolve;
`

interface ICircleProps {
  width: number;
  height: number;
  zIndex: number;
}

export const NotFound = (): JSX.Element => {
  return (
    <NotFoundContainer>
      <Actions />
      <Circle width={40} height={40} zIndex={2} />
      <Circle width={60} height={60} zIndex={1} />
      <FoursContainer>
        <span>4</span>
        <Moon />
        <span>4</span>
      </FoursContainer>
    </NotFoundContainer>
  )
}