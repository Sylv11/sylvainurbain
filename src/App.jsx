import React, { useEffect, useState } from 'react'
import './assets/css/index.css'
import Fade from 'react-reveal/Fade'
import defaultAvatar from './assets/img/avatar.svg'
import avatarSmile from './assets/img/avatar-smile.svg'
import Language from './services/Language'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useTranslation } from 'react-i18next';

const App = () => {
    const [avatar, setAvatar] = useState(defaultAvatar)
    const { t } = useTranslation()

    const setLanguage = (language) => {
        localStorage.setItem('lang', language)
    }

    const handleMouseEnter = () => {
        setAvatar(avatarSmile)
    }

    const handleMouseLeave = () => {
        setAvatar(defaultAvatar)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const biography = document.getElementById('biography')
            const biographyPosition = biography.getBoundingClientRect()

            if ((biographyPosition.top - 300) < window.pageYOffset) {
                document.getElementById('speech-bubble-text').innerHTML = t('hello') + '</br>' + t('hello')
            } else {
                document.getElementById('speech-bubble-text').innerHTML = t('hello') + '</br>' + t('hello')
            }
        })
    }, [])

        return (
            <div id='main-container'>
                <Fade top delay={1500}>
                    <div className='lang-container'>
                        <span onClick={() => setLanguage('fr')}>FR</span>
                        <span onClick={() => setLanguage('en')}>EN</span>
                        <p>{t('Welcome to React')}</p>
                    </div>
                </Fade>
                <div className='subcontainer start'>
                    <h1>
                        {t('en:hello')}
                    </h1>
                    <Fade right delay={1000}>
                        <img src={avatar} alt='avatar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                        <div className='speech-bubble'>
                            <p id='speech-bubble-text'>{t('hello')}<br/>{t('hello')}
                            </p>
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
                                <h2>{t('hello')}</h2>
                                <p>{t('hello')}</p>
                                <p>{t('hello')}</p>
                                <p>{t('hello')}</p>
                                <p>{t('hello')}</p>
                                <hr/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
}

export default App
