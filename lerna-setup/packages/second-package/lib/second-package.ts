import { isOdd } from 'first-package';

export const isEven = (n: number): boolean => {
  return !isOdd(n);
};
