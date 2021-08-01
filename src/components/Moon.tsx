import React from 'react'
import styled, { keyframes } from 'styled-components'

import { buildShapes } from '../utils'
import { CRATERS } from '../constants/shapes'
import { CRATER_TYPE } from '../constants/globals'

const glow = keyframes`
    0% {
        box-shadow: 
            inset 4px 0px #A2B5BF, 
            0 0 2px 1px rgba(117, 117, 117, 0.4);
    }
    50% {
        box-shadow: 
            inset 4px 0px #A2B5BF, 
            0 0 2px 2px rgba(117, 117, 117, 0.4);
    }
    100% {
        box-shadow: 
            inset 4px 0px #A2B5BF, 
            0 0 2px 1px rgba(117, 117, 117, 0.4);
    }
`

const MoonContainer = styled.div`
    background-color: #CAD9DD;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 4px solid #A2B5BF;
    box-shadow: 
        inset 4px 0px #A2B5BF, 
        0 0 2px 1px rgba(117, 117, 117, 0.4);
    transform: rotate(220deg);
    position: relative;
    animation: ${glow} 2s infinite linear forwards;
    z-index: 1;

    ${({ onClick }: IProps): string => `
        ${onClick ? `
        &:hover, &:focus {
            cursor: pointer;
        }
        ` : ''}
    `}
`

interface IProps {
    onClick?: () => void;
}

export const Moon = ({ onClick }: IProps): JSX.Element => {
    return (
        <MoonContainer onClick={onClick}>
            {buildShapes(CRATERS, CRATER_TYPE)}
        </MoonContainer>
    )
}