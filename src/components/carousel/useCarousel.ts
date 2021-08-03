import { Children, useEffect, useMemo, useRef, useState } from 'react';

import {
  scrollLeftToStep,
  scrollRightToStep,
  scrollToStep,
  showHideIndicator,
  THRESHOLD,
} from './utils';

const useCarousel = (children: JSX.Element | JSX.Element[]) => {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useMemo<HTMLElement[]>(
    () => Array.from({ length: Children.toArray(children).length }),
    [children],
  );
  const [leftIndicator, setLeftIndicator] = useState(false);
  const [rightIndicator, setRightIndicator] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.intersectionRatio >= THRESHOLD
            ? entry.target.setAttribute('visible', 'true')
            : entry.target.removeAttribute('visible');

          showHideIndicator(itemRefs, setLeftIndicator, setRightIndicator);
        });
      },
      {
        root: listRef.current,
        threshold: THRESHOLD,
      },
    );

    itemRefs.forEach((item) => {
      observer.observe(item as HTMLElement);
    });

    return () => {
      observer.disconnect();
    };
  }, [itemRefs]);

  const scrollLeft = (step: number) => {
    scrollLeftToStep(step, itemRefs);
  };

  const scrollRight = (step: number) => {
    scrollRightToStep(step, itemRefs);
  };

  const scrollTo = (index: number) => {
    scrollToStep(index, itemRefs);
  };

  const itemRef = (index: number) => (elm: HTMLElement | null) => {
    if (elm) itemRefs[index] = elm;
  };

  return {
    leftIndicator,
    rightIndicator,
    listRef,
    scrollLeft,
    scrollRight,
    scrollTo,
    itemRef,
  };
};

export default useCarousel;
