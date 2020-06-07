import React from 'react'
import Fade from 'react-reveal/Fade'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Anchor = () => {
  return (
    <Fade bottom cascade delay={2500}>
      <div className='anchor-link'>
          <AnchorLink href='#biography' className="anchor-click">
              <div className='chevron'></div>
              <div className='chevron'></div>
              <div className='chevron'></div>
          </AnchorLink>
      </div>
    </Fade>
  )
}