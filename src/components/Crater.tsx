import styled from 'styled-components'

import { sizeAndPosition } from './LivingBubble'
import { IOwnShapeProps } from '../interfaces'

export const Crater = styled.div`
  background-color: #A2B5BF;
  border-radius: 48%;
  box-shadow: inset 0.2vmin 0px #859ba9;
  transform: rotate(180deg);
  border: 1px solid #CAD9DD;
  ${sizeAndPosition}
  ${({ position: { top, bottom, left, right } }: IOwnShapeProps): string => `
    top: ${top ? `${top}px` : ''};
    bottom: ${bottom ? `${bottom}px` : ''};
    left: ${left ? `${left}px` : ''};
    right: ${right ? `${right}px` : ''};
`}
`