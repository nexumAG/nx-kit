import { ReactNode } from 'react';
import { DefaultTheme } from '@nx-kit/styling';

type ThemeBreakpoints = {
  global: {
    breakpoint: {
      [key: string]: { min: number; max: number | null };
    };
  };
};
export type BreakpointKeyG<T extends ThemeBreakpoints> = keyof T['global']['breakpoint'];
export type BreakpointKey = BreakpointKeyG<
  DefaultTheme extends ThemeBreakpoints ? DefaultTheme : any
>;

export type BreakpointRecord = { min: number; max: number | null; breakpoint: BreakpointKey };
export type BreakpointList = BreakpointRecord[];

export type BreakpointProps = {
  children: ReactNode | (() => ReactNode);
  min?: BreakpointKey;
  max?: BreakpointKey;
};

export type BreakpointProviderProps = {
  children: ReactNode;
  ssrWidth?: number;
  breakpoints?: BreakpointList;
};

export type BreakpointContextType = {
  breakpoints: BreakpointList;
  breakpoint: BreakpointRecord;
};
