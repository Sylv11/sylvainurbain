import React, { useEffect, useState, useRef } from 'react'
import './assets/css/index.css'
import Fade from 'react-reveal/Fade'
import defaultAvatar from './assets/img/avatar.svg'
import avatarSmile from './assets/img/avatar-smile.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useTranslation } from 'react-i18next';

const Home = () => {
    const [avatar, setAvatar] = useState(defaultAvatar)
    const { t } = useTranslation()
    const biographyPartRef = useRef(null)
    const speechBubbleRef = useRef(null)
    const speechBubbleText = useSpeechBubbleText(
            t('welcome'), 
            biographyPartRef
        )

    const setLanguage = (language) => {
        localStorage.setItem('lang', language)
    }

    const handleMouseEnter = () => {
        setAvatar(avatarSmile)
    }

    const handleMouseLeave = () => {
        setAvatar(defaultAvatar)
    }

    return (
        <div id='main-container'>
            <Fade top delay={1500}>
                <div className='lang-container'>
                    <span onClick={() => setLanguage('fr')}>FR</span>
                    <span onClick={() => setLanguage('en')}>EN</span>
                </div>
            </Fade>
            <div className='subcontainer start'>
                <h1>
                    {t('hello')}
                </h1>
                <Fade right delay={1000}>
                    <img src={avatar} alt='avatar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                    <div className='speech-bubble'>
                        <p id='speech-bubble-text' ref={speechBubbleRef}>{speechBubbleText}
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
                <div id='biography' ref={biographyPartRef}>
                    <div id='biography-image'></div>
                    <Fade left delay={500}>
                        <div id='biography-text'>
                            <h2>{t('biography.title')}</h2>
                            <p>{t('biography.text')}</p>
                            <hr/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

const useSpeechBubbleText = (defaultText, biographyPartRef) => {
    const [text, setText] = useState(defaultText)
    const { t } = useTranslation()

    useEffect(() => {
        if (biographyPartRef) {
            window.addEventListener('scroll', () => {
                const biographyPosition = biographyPartRef.current.getBoundingClientRect()

                if ((biographyPosition.top - 300) < window.pageYOffset) {
                    setText(t('biography.speechBubble'))
                } else {
                    setText(t('welcome'))
                }
            })
        }
    }, [])

    return text
}

export default Home