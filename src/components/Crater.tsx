import styled from 'styled-components'

import { sizeAndPosition } from './LivingBubble'

export const Crater = styled.div`
  background-color: #A2B5BF;
  border-radius: 50%;
  box-shadow: inset 1.5px 0px #859ba9;
  transform: rotate(180deg);
  border: 1px solid #CAD9DD;
  ${sizeAndPosition}
`