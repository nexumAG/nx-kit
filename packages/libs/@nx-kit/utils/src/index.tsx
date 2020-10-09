import React from 'react';

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
