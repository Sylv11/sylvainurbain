import React, { useState, useRef, RefObject, useCallback } from 'react'
import styled from 'styled-components'
import { useSelector, RootStateOrAny } from 'react-redux'

import defaultAvatar from './assets/img/avatar.svg'
import avatarSmile from './assets/img/avatar-smile.svg'
import { useSpeechBubbleText } from './hooks'
import { Anchor } from './components/Anchor'
import { SpeakingAvatar } from './components/SpeakingAvatar'
import { Biography } from './components/Biography'
import { IShapeProps, IThemeProps } from './interfaces'
import { 
    BUBBLES_1,
    LIGHT_BLOBS,
    BUBBLES_2
} from './constants/shapes'
import { BLOB_PROPS, BLOB_TYPE, BUBBLE_TYPE } from './constants/globals'
import { buildShapes } from './utils'
import { Actions } from './components/Actions'
import { MainTitle } from './components/MainTitle'

const SubContainer = styled.div`
    height: 100vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Home = (): JSX.Element => {
    const [avatar, setAvatar] = useState<string>(defaultAvatar)
    const biographyPartRef: RefObject<HTMLDivElement> = useRef(null)
    const speechBubbleRef: RefObject<HTMLParagraphElement> = useRef(null)
    const speechBubbleText: string = useSpeechBubbleText('welcome', biographyPartRef)
    const theme: IThemeProps = useSelector(({ theme }: RootStateOrAny) => theme)

    const handleMouseEnter = (): void => setAvatar(avatarSmile)

    const handleMouseLeave = (): void => setAvatar(defaultAvatar)

    const getBlobProps = useCallback((): IShapeProps[] => BLOB_PROPS[theme?.mode] ?? LIGHT_BLOBS, [theme])

    return (
        <>
            <SubContainer>
                <Actions />
                <MainTitle />
                <SpeakingAvatar 
                    avatar={avatar}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    speechBubbleRef={speechBubbleRef}
                    speechBubbleText={speechBubbleText}
                />
                <Anchor />
                {buildShapes(BUBBLES_1, BUBBLE_TYPE)}
            </SubContainer>
            <SubContainer>
                {buildShapes(getBlobProps(), BLOB_TYPE)}
                {buildShapes(BUBBLES_2, BUBBLE_TYPE)}
                <Biography biographyPartRef={biographyPartRef} />
            </SubContainer>
        </>
    )
}

export default Home