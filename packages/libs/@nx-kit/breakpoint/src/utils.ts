import { BreakpointKey, BreakpointList, BreakpointRecord } from './types';

export const getMediaQuery = (breakpoint: BreakpointRecord): string => {
  let mediaQuery = `(min-width: ${breakpoint.min}px)`;
  if (breakpoint.max !== null && breakpoint.max > breakpoint.min) {
    mediaQuery += ` and (max-width: ${breakpoint.max}px)`;
  }
  return mediaQuery;
};

export const getBreakpointByWidth = (breakpoints: BreakpointList, width: number) => {
  return breakpoints.reduce(
    (acc, b) => (width >= b.min && (!b.max || width <= b.max) ? b : acc),
    breakpoints[0]
  );
};

export const breakpointIsBetween = (
  breakpoint: BreakpointRecord | null,
  min?: BreakpointKey,
  max?: BreakpointKey,
  breakpoints: BreakpointList = []
) => {
  if (!breakpoint) {
    return false;
  }

  const minBreakpointIndex = breakpoints.findIndex((s) => s.breakpoint === min);
  const maxBreakpointIndex = breakpoints.findIndex((s) => s.breakpoint === max);
  const currentBreakpointIndex = breakpoints.findIndex(
    (s) => s.breakpoint === breakpoint.breakpoint
  );
  return (
    currentBreakpointIndex >= minBreakpointIndex &&
    (maxBreakpointIndex === -1 || currentBreakpointIndex <= maxBreakpointIndex)
  );
};
