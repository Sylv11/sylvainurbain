import React, { RefObject } from 'react'
import styled from 'styled-components'
import { UseTranslationResponse, useTranslation } from 'react-i18next'

import biographyImage from '../assets/img/biography.jpg'
import { WHITE, DARK } from '../constants/globals'

const BiographyContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  white-space: pre-line;
  height: 100%;
  width: 680px;
  color: ${DARK};
  padding: 10px;
  z-index: 3;
`

const BiographyImage = styled.div`
  flex: 1;
  background-image: url(${biographyImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -92px;
  height: calc(100% - 100px);
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: -13px 45px 71px -14px rgba(0,0,0,0.75);
  z-index: 3;
  transition: all 0.6s ease-in-out;
  border-radius: 5px;
  overflow: hidden;

  &:hover, &:focus {
    transform: scale(1.05);
  }
`

const BiographyText = styled.div`
  height: 80%;
  flex: 1;
  background-color: ${WHITE};
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 16px 45px 74px -10px rgba(0,0,0,0.75);
  text-align: justify;
  overflow-y: scroll;
  border-radius: 0 5px 5px 0;
`

const BiographyTitle = styled.h2`
  color: ${DARK};
  font-weight: 900;
  font-size: 33px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
  text-transform: uppercase;
  margin: 0;
  user-select: none;
  font-family: 'kiona';
  font-weight: light;
`

const EndDelimiter = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
`

interface IProps {
  biographyPartRef: RefObject<HTMLDivElement>;
}

export const Biography = ({
  biographyPartRef,
}: IProps): JSX.Element => {
  const { t }: UseTranslationResponse = useTranslation()

  return (
    <BiographyContainer id='biography' ref={biographyPartRef}>
        <BiographyImage />
        <BiographyText>
            <BiographyTitle>
              {t('biography.title')}
            </BiographyTitle>
            <EndDelimiter />
            <p>{t('biography.text')}</p>
        </BiographyText>
    </BiographyContainer>
  )
}