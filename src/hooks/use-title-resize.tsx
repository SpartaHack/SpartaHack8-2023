import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useTitleResizeOnScroll = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const title = ref.current;
    if (!title) return;

    gsap.to(title, {
        scrollTrigger: {
          scrub: true,
        },
        fontSize: () => {
          const scrollPercent = Math.min(window.scrollY / document.body.scrollHeight, 1);
          if (window.innerWidth >= 1024) {
            const fontSize = Math.max(140 - (scrollPercent * 100), 0);
            return `${fontSize}px`;
          } else {
            const fontSize = Math.max(50 - (scrollPercent * 100), 0);
            return `${fontSize}px`;
          }
        },
        ease: "power1.out",
        immediateRender: false,
    });
  }, [ref]);
}

export default useTitleResizeOnScroll;