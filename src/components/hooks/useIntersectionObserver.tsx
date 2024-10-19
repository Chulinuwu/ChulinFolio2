import { useEffect, useRef } from 'react';

function useIntersectionObserver<T extends HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  const observer = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(callback, options);

    const { current: currentObserver } = observer;
    const { current: currentElement } = elementRef;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentObserver && currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [callback, options]);

  return elementRef;
}

export default useIntersectionObserver;