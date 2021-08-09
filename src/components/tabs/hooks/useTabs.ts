import { Children, ReactElement, useCallback, useEffect, useMemo, useRef } from 'react';

import { TabItemProps } from '../components/tab-item';
import useDefaultState from './useDefaultState';

const useTabs = <T extends ReactElement<TabItemProps>[]>(
  children: T,
  defaultActiveKey?: string,
  space: number = 0,
) => {
  const [activeIndex, setActiveIndex] = useDefaultState(children, defaultActiveKey);
  const itemRefs = useMemo<HTMLElement[]>(
    () => Array.from({ length: Children.toArray(children).length }),
    [children],
  );
  const barRef = useRef<HTMLDivElement>(null);

  const itemRef = (index: number) => (elm: HTMLElement | null) => {
    if (elm) itemRefs[index] = elm;
  };

  const getLeft = useCallback(
    (index: number) => {
      const previousWidths = itemRefs.reduce((total, current, currentIndex) => {
        if (currentIndex < index) return total + current.offsetWidth;
        return total;
      }, 0);

      return previousWidths + space * index;
    },
    [itemRefs, space],
  );

  useEffect(() => {
    const width = itemRefs[activeIndex].offsetWidth;
    barRef.current!.style.width = `${width}px`;
    barRef.current!.style.left = `${getLeft(activeIndex)}px`;
  }, [activeIndex, getLeft, itemRefs, space]);

  const handleTabChange = useCallback(
    (tabIndex: number) => () => {
      setActiveIndex(tabIndex);
    },
    [setActiveIndex],
  );

  return { activeIndex, handleTabChange, itemRef, barRef };
};

export default useTabs;
