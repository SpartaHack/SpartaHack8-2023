import { RefObject, useEffect } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const clickedElement = event.target as HTMLElement;

      let currentElement: HTMLElement | null = clickedElement;
      while (currentElement) {
        if (currentElement.classList.contains('prevent-close')) {
          return;
        }
        currentElement = currentElement.parentElement;
      }

      if (ref.current && ref.current.contains(clickedElement)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;