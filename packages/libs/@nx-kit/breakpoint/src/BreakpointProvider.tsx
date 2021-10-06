import React, { createContext, useRef, useState, useEffect, useContext } from 'react';
import { useBreakpointsSorted } from '@nx-kit/styling';
import {
  BreakpointProviderProps,
  BreakpointContextType,
  BreakpointRecord,
  BreakpointList,
} from './types';
import { getBreakpointByWidth, getMediaQuery } from './utils';

const BreakpointContext = createContext<BreakpointContextType>({
  breakpoints: [],
  breakpoint: { min: 0, max: 575, breakpoint: 'xs' },
});

export const useBreakpoint = () => {
  return useContext(BreakpointContext);
};

export const BreakpointProvider = ({
  children,
  ssrWidth = 320,
  breakpoints: breakpointsProp,
}: BreakpointProviderProps) => {
  const breakpointsSorted = useBreakpointsSorted();
  const mqls = useRef<any>([]);
  const [breakpoints] = useState<BreakpointList>(breakpointsProp ?? breakpointsSorted);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointRecord>(
    getBreakpointByWidth(breakpoints, ssrWidth)
  );

  useEffect(() => {
    const register =
      (breakpoint: BreakpointRecord) => (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          setCurrentBreakpoint(breakpoint);
        }
      };

    breakpoints.forEach((breakpoint) => {
      const mql = window.matchMedia(getMediaQuery(breakpoint));

      const listener = register(breakpoint);
      mql.addListener(listener);
      listener(mql);
      mqls.current = [...mqls.current, { mql, listener }];
    });

    return () => {
      mqls.current.forEach((m: any) => m.mql.removeListener(m.listener));
    };
  }, []);

  return (
    <BreakpointContext.Provider
      value={{
        breakpoints,
        breakpoint: currentBreakpoint,
      }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};
