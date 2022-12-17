import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    ouMouseEnter: () => void;
    ouMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export function useHover() {
  const [isHover, setIsHover] = useState(false);

  const ouMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const ouMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => [
      isHover,
      { ouMouseEnter, ouMouseLeave },
    ],
    [isHover, ouMouseEnter, ouMouseLeave],
  );
}
