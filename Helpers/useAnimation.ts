import { MutableRefObject, useEffect } from "react";

export const useAnimation = (
  grid: MutableRefObject<HTMLDivElement | null> | HTMLCollectionOf<Element>,
  animation: string,
  shouldLoop: boolean,
  container?: MutableRefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);

  const animateIn = () => {
    let height = window.innerHeight;

    if (container) {
      if (container.current) {
        let width = container.current;
        let revealpoint = 120;
        let revealTop = width.getBoundingClientRect().top;
        if (revealTop < height - revealpoint) {
          width.classList.add(animation);
        }
      }
    }
    let ref = (grid as MutableRefObject<HTMLDivElement | null>) ?? true;
    let getCurrent = ref.current ?? true;
    if (getCurrent) {
      let widthsRef;
      if (ref.current) {
        widthsRef = ref.current.children;
      } else {
        widthsRef = document.getElementsByClassName("anim");
      }

      let widthsClass = document.getElementsByClassName("anim");

      for (
        let index = 0;
        index < widthsRef.length ?? widthsClass.length;
        index++
      ) {
        const element = widthsRef[index] ?? widthsClass[index];
        let revealTop = element.getBoundingClientRect().top;
        let revealpoint = 120;
        if (revealTop < height - revealpoint) {
          element.classList.add(animation);
        } else {
          if (shouldLoop) {
            element.classList.remove(animation);
          }
        }
      }
    }
  };
};
