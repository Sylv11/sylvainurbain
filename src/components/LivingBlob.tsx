import styled from 'styled-components'

import { IThemeProviderProps } from '../interfaces'
import { shapesCommonStyle } from './LivingBubble'

export const LivingBlob = styled.img`
  opacity: ${({ theme }: IThemeProviderProps): string => theme?.other?.blobOpacity ?? '0.1'};
  pointer-events: none;
  user-select: none;
  ${shapesCommonStyle}
`