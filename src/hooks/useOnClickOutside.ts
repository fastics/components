import { RefObject, useEffect } from 'react';

const useOnClickOutside = <T extends HTMLElement>(ref: RefObject<T>, handler: Function) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, ref]);
};

export default useOnClickOutside;
