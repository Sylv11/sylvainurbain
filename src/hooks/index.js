import { useEffect, useState } from 'react'

export const useSpeechBubbleText = (defaultText, biographyPartRef) => {
  const [text, setText] = useState(defaultText)

  useEffect(() => {
      if (biographyPartRef) {
          window.addEventListener('scroll', () => {
              const biographyPosition = biographyPartRef.current.getBoundingClientRect()

              if ((biographyPosition.top - 300) < window.pageYOffset) {
                  setText('biography.speechBubble')
              } else {
                  setText('welcome')
              }
          })
      }
  }, [])

  return text
}