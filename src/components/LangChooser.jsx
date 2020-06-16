import React from 'react'
import styled from 'styled-components'

const LangContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 55px;
`

const LangItem = styled.span`
  padding-top: 15px;
  margin-right: 15px;
  color: #FFF;
  transition: 0.3s;

  &:hover, &:focus {
    cursor: pointer;
    margin-top: 5px;
  }
`

export const LangChooser = ({languages, setLanguage}) => {
  return (
    <LangContainer>
      {languages.map((language, index) => <LangItem onClick={() => setLanguage(language.toLowerCase())} key={index}>{language}</LangItem>)}
    </LangContainer>
  )
}
