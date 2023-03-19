import { RefObject, useEffect, useState } from 'react';

export const range = (
  start: number = 0,
  stop: number = 1,
  step: number = 0.1,
  precision: number = 1
) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) =>
    Number((start + i * step).toFixed(precision))
  );

const useOnScreen = (
  ref: RefObject<HTMLElement | null>,
  observerOptions?: IntersectionObserverInit
) => {
  const [intersectionValues, setIntersectionValues] = useState({
    isIntersecting: false,
    ratio: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const observable = ref.current as HTMLElement;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersectionValues((prevValues) => ({
        ...prevValues,
        isIntersecting: entry.isIntersecting,
        ratio: Math.round(entry.intersectionRatio * 100),
        width: Math.round(entry.intersectionRect.width),
        height: Math.round(entry.intersectionRect.height),
      }));
    }, observerOptions);

    observer.observe(observable);

    return () => observer.unobserve(observable);
  }, []);

  return intersectionValues;
};

export default useOnScreen;
