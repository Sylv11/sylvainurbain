import styled, { keyframes } from 'styled-components'

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

export const Moon = styled.div`
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

    &:hover, &:focus {
        cursor: pointer;
    }
`