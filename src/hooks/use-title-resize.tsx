import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'

const useTitleResizeOnScroll = (ref: RefObject<HTMLElement>) => {

  useEffect(() => {
    const title = ref.current;

    const handleScroll = () => {
      if(!title) return;
      
      if (window.innerWidth >= 1024) {
        const scrollPercent = window.scrollY / document.body.scrollHeight
        gsap.to(title, {
          fontSize: `${140 - (scrollPercent * 100)}px`,
          ease: "power1.out",
        })
      } else {
        const scrollPercent = window.scrollY / document.body.scrollHeight
        gsap.to(title, {
          fontSize: `${50 - (scrollPercent * 100)}px`,
          ease: "power1.out",
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    
  }, [ref])

}

export default useTitleResizeOnScroll