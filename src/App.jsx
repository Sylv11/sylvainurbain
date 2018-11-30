import React, { Component } from 'react'
import './assets/css/index.css'
import Fade from 'react-reveal/Fade'
import avatar from './assets/img/avatar.svg'
import avatarSmile from './assets/img/avatar-smile.svg'
import Language from './services/Language'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class App extends Component {

  setLanguage = (language) => {
    localStorage.setItem('lang', language)
    document.getElementById('speech-bubble-text').innerHTML = Language.getText('welcome-start') + '</br>' + Language.getText('welcome-end')
    this.forceUpdate()
  }

  componentDidMount = () => {
    this.image.addEventListener('mouseenter', () => {
      this.image.src = avatarSmile
    })

    this.image.addEventListener('mouseleave', () => {
      this.image.src = avatar
    })

    window.addEventListener('scroll', () => {
      const biography = document.getElementById('biography')
      const biographyPosition = biography.getBoundingClientRect()

      if ((biographyPosition.top - 300) < window.pageYOffset) {
        document.getElementById('speech-bubble-text').innerHTML = Language.getText('biography-speech-bubble-start') + '</br>' + Language.getText('biography-speech-bubble-end')
      } else {
        document.getElementById('speech-bubble-text').innerHTML = Language.getText('welcome-start') + '</br>' + Language.getText('welcome-end')
      }
    })
  }

  render() {
    return (
      <div id='main-container'>
        <Fade top delay={1500}>
          <div className='lang-container'>
            <span onClick={e => this.setLanguage('fr')}>FR</span>
            <span onClick={e => this.setLanguage('en')}>EN</span>
          </div>
        </Fade>
        <div className='subcontainer start'>
          <h1>
            <Fade big cascade delay={500}>
              {Language.getText('hello')}
            </Fade>
          </h1>
          <Fade right delay={1000}>
            <img src={avatar} alt='avatar' ref={image => this.image = image} />
            <div className='speech-bubble'>
              <p id='speech-bubble-text'>{Language.getText('welcome-start')}<br />{Language.getText('welcome-end')}</p>
            </div>
          </Fade>
          <Fade bottom cascade delay={2500}>
            <div className='anchor-link'>
              <AnchorLink href='#biography' className="anchor-click">
                <div className='chevron'></div>
                <div className='chevron'></div>
                <div className='chevron'></div>
              </AnchorLink>
            </div>
          </Fade>
        </div>
        <div className='subcontainer middle'>
          <div id='biography'>
            <div id='biography-image'></div>
            <Fade left delay={500}>
              <div id='biography-text'>
                <h2>{Language.getText('biography-title')}</h2>
                <p>{Language.getText('biography-text-start')}</p>
                <p>{Language.getText('biography-text-middle')}</p>
                <p>{Language.getText('biography-text-end')}</p>
                <hr />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
