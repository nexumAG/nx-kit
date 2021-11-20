import React, { useRef, useEffect, EffectCallback, DependencyList } from 'react';

// https://github.com/gregberge/react-merge-refs/blob/master/src/index.tsx
// changed argument spreading

export function mergeRefs<T = any>(
  ...refs: Array<
    React.MutableRefObject<T> | React.Ref<T> | ((element: T | null) => void) | undefined
  >
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref) {
        // eslint-disable-next-line no-param-reassign
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

export const useEffectExceptOnMount = (effect: EffectCallback, deps?: DependencyList) => {
  const mounted = useRef(false);
  // @ts-ignore
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (mounted.current) {
      const unmount = effect();
      return () => unmount && unmount();
    }
    mounted.current = true;
  }, deps);

  // Reset on unmount for the next mount.
  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
};
