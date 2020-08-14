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
        top: ${top ? `${top}px` : ''};
        bottom: ${bottom ? `${bottom}px` : ''};
        left: ${left ? `${left}px` : ''};
        right: ${right ? `${right}px` : ''};
        height: ${size ? size : 10}px;
        width: ${size ? size : 10}px;
    `}
`
export const shapesCommonStyle = css`
    animation: ${({ animated, speed }: IShapeProps): '' | FlattenSimpleInterpolation => animated ? css`${animateBubble} ${speed}s ease-in-out infinite` : ''};
    ${sizeAndPosition}
`

export const LivingBubble = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }: IThemeProviderProps): string => theme?.colors?.shapes ?? DARK};
  opacity: 1;
  z-index: 1;
  ${shapesCommonStyle}
`