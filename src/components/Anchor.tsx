import React from 'react'
import styled, {keyframes} from 'styled-components'

import { IThemeProviderProps } from '../interfaces'
import { DARK } from '../constants/globals'

const AnchorLinkContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 0;
`

const ChevronContainer = styled.a`
    height: 89px;
    width: 37px;
    display: flex;
    justify-content: center;
`
const moveChevron = keyframes`
    25% {
        opacity: 1;
    }
    33.3% {
        opacity: 1;
        transform: translateY(calc(0.6rem * 3.8));
    }
    66.6% {
        opacity: 1;
        transform: translateY(calc(0.6rem * 5.2));
    }
    100% {
        opacity: 0;
        transform: translateY(calc(0.6rem * 8)) scale(0.5);
    }
`

const Chevron = styled.div`
    position: absolute;
    width: calc(0.6rem * 3.5);
    height: calc(0.1rem * 0.75);
    opacity: 0;
    transform: scale(0.3);
    animation: ${moveChevron} 3s ease-out infinite;

    &:first-child {
        animation: ${moveChevron} 3s ease-out 1s infinite;
    }

    &:nth-child(2) {
        animation: ${moveChevron} 3s ease-out 2s infinite;
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: ${({ theme }: IThemeProviderProps): string => theme?.colors?.anchor ?? DARK};
    }

    &:before {
        left: 0;
        transform: skewY(30deg);
    }

    &:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
    }
`

export const Anchor = (): JSX.Element => {
    return (
        <AnchorLinkContainer>
            <ChevronContainer href="#biography">
                <Chevron />
                <Chevron />
                <Chevron />
            </ChevronContainer>
        </AnchorLinkContainer>
    )
}
