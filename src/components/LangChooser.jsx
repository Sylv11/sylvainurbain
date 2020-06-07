import React from 'react'
import Fade from 'react-reveal/Fade'

export const LangChooser = ({languages, setLanguage}) => {
  return (
    <Fade top delay={1500}>
      <div className='lang-container'>
        {languages.map(language => <span onClick={() => setLanguage(language.toLowerCase())}>{language}</span>)}
      </div>
    </Fade>
  )
}
