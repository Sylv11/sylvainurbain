import { useLayoutEffect, useState, RefObject } from 'react'

export const useSpeechBubbleText = (defaultText: string, biographyPartRef: RefObject<HTMLDivElement>): string => {
  const [text, setText] = useState<string>(defaultText)

  useLayoutEffect(() => {
      if (biographyPartRef) {
          window.addEventListener('scroll', (): void => {
              const biographyPosition: ClientRect | undefined = biographyPartRef?.current?.getBoundingClientRect()

              if (biographyPosition && ((biographyPosition.top - 300) < window.pageYOffset)) {
                  setText('biography.speechBubble')
              } else {
                  setText('welcome')
              }
          })
      }
  })

  return text
}