import styled, { keyframes } from 'styled-components'

const sunrise = keyframes`
    0% {
        box-shadow: none;
    }
`

const rays = keyframes`
    0% {
        box-shadow: 
            inset 6px 0px #DDC20B, 
            0 0 0 0 #FFDE0080,
            0 0 0 2px #FFDE0080,
            0 0 0 4px #FFDE0040,
            0 0 0 6px #FFDE0020,
            0 0 0 8px #FFDE0010,
            0 0 4px 10px #FFDE0010;
    }
    100% {
        box-shadow: 
            inset 6px 0px #DDC20B, 
            0 0 0 2px #FFDE0080,
            0 0 0 4px #FFDE0040,
            0 0 0 6px #FFDE0020,
            0 0 0 8px #FFDE0010,
            0 0 0 10px #FFDE0000,
            0 0 4px 10px #FFDE0010;
    }
`

export const Sun = styled.div`
    width: 50px;
    height: 50px;
    background-color: #FFDE00;
    border-radius: 50%;
    box-shadow:
        inset 6px 0px #DDC20B, 
        0 0 0 2px #FFDE0080,
        0 0 0 4px #FFDE0040,
        0 0 0 6px #FFDE0020,
        0 0 0 8px #FFDE0010,
        0 0 0 10px #FFDE0000,
        0 0 4px 10px #FFDE0010;
    animation:
        ${sunrise} 0s infinite linear forwards,
        ${rays} 2s 0s infinite linear;
    z-index: 1;
    
    &:hover, &:focus {
        cursor: pointer;
    }
`