import styled, { FlattenSimpleInterpolation, css, keyframes } from 'styled-components'

import { IThemeProviderProps, IOwnShapeProps, IShapeProps } from '../interfaces'
import { DARK } from '../constants/globals'

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

export const sizeAndPosition = css`
    position: absolute;
    ${({ size, position: { top, bottom, left, right } }: IOwnShapeProps): string => `
        top: ${top ? `${top}vh` : ''};
        bottom: ${bottom ? `${bottom}vh` : ''};
        left: ${left ? `${left}vw` : ''};
        right: ${right ? `${right}vw` : ''};
        height: ${size ? size : 10}vmin;
        width: ${size ? size : 10}vmin;
    `}
`
export const shapesCommonStyle = css`
    animation: ${({ animated, speed }: IShapeProps): '' | FlattenSimpleInterpolation => animated ? css`${animateBubble} ${speed}s ease-in-out infinite` : ''};
    ${sizeAndPosition}
`

export const LivingBubble = styled.div`
  border-radius: 50%;
  box-shadow: 5px 27px 30px -27px #000;
  background: ${({ theme }: IThemeProviderProps): string => theme?.colors?.shapes ?? DARK};
  opacity: 0.7;
  z-index: 1;
  ${shapesCommonStyle}
`