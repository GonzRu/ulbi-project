import { classNames } from 'shared/lib/classNames/classNames';
import {
  MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/hooks/useThrottle';
import { getScrollPosition } from '../../model/selectors/restoreScrollSelectors';
import { restoreScrollActions } from '../../model/slices/restoreScrollSlice';
import cl from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
    saveScrollPosition?: boolean;
}

export const Page = (props: PageProps) => {
  const {
    className,
    children,
    onScrollEnd,
    saveScrollPosition,
  } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const position = useSelector((state: StateSchema) => getScrollPosition(state, pathname));
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    if (saveScrollPosition) {
      wrapperRef.current.scrollTop = position;
    }
  });

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    if (!saveScrollPosition) return;

    dispatch(restoreScrollActions.setPosition({
      name: pathname,
      position: event.currentTarget.scrollTop,
    }));
  }, 100);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cl.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
