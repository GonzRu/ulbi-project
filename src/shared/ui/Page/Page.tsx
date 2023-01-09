import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import cl from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cl.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
