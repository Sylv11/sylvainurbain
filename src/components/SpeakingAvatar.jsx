import React from 'react'
import Fade from 'react-reveal/Fade'

export const SpeakingAvatar = ({ 
  avatar,
  handleMouseEnter,
  handleMouseLeave, 
  speechBubbleRef, 
  speechBubbleText,
  t }) => {
  return (
    <Fade right delay={1000}>
        <img src={avatar} alt='avatar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        <div className='speech-bubble'>
            <p id='speech-bubble-text' ref={speechBubbleRef}>{t(`${speechBubbleText}`)}
            </p>
        </div>
    </Fade>
  )
}