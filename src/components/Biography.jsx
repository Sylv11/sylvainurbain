import React from 'react'
import Fade from 'react-reveal/Fade'

export const Biography = ({
  biographyPartRef,
  t
}) => {
  return (
    <div id='biography' ref={biographyPartRef}>
        <div id='biography-image' style={{overflow: 'hidden'}}></div>
        <Fade left delay={500}>
            <div id='biography-text'>
                <h2>{t('biography.title')}</h2>
                <p>{t('biography.text')}</p>
                <hr/>
            </div>
        </Fade>
    </div>
  )
}