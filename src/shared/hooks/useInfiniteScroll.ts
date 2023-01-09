import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(props: UseInfiniteScrollProps) {
  const {
    callback,
    triggerRef,
    wrapperRef,
  } = props;

  useEffect(() => {
    if (!callback) return () => {};

    const wrapperRefElement = wrapperRef.current;
    const triggerRefElement = triggerRef.current;

    const options: IntersectionObserverInit = {
      root: wrapperRefElement,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerRefElement);

    return () => {
      if (observer) {
        observer.unobserve(triggerRefElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
