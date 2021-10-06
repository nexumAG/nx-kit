import { FlexContainer, LiteralOrBreakpoints, parseGap, Theme } from '@nx-kit/styling';
import { FlexContextGap, Breakpoints } from './Flex.types';

export const hasGapBreakpoints = (gap?: FlexContextGap): boolean => {
  if (!gap) {
    return false;
  }
  return !(gap.columnGap && gap.rowGap);
};

export const getGapContextValue = (theme?: Theme, gap?: FlexContainer['gap']): FlexContextGap => {
  if (!gap) {
    return {
      rowGap: '0px',
      columnGap: '0px',
    };
  }
  if (typeof gap === 'string' || typeof gap === 'number') {
    return parseGap(gap, theme);
  }
  return Object.keys(gap).reduce(
    (acc, breakpoint: number | string) => ({
      ...acc,
      // @ts-ignore
      [breakpoint]: parseGap(gap[breakpoint], theme),
    }),
    {}
  );
};

export const getGapValue = (
  key: 'columnGap' | 'rowGap',
  breakpoint: string | number,
  gap?: FlexContextGap
) => {
  if (!gap) {
    return null;
  }
  // no gap breakpoints
  if (!hasGapBreakpoints(gap)) {
    return gap[key];
  }
  // same breakpoint exists in gap
  const gapBreakpoint = (gap as any)[breakpoint];
  if (gapBreakpoint) {
    return gapBreakpoint[key];
  }
  // this case should not be true, only fallback
  const firstBreakpoint = Object.keys(gap)[0];
  return (gap as any)[firstBreakpoint][key] ?? null;
};

export const customFunctionSize =
  (key: 'columnGap' | 'rowGap', prop: string, gap?: FlexContextGap) =>
  (_: string, value: any, breakpoint?: string | number) => {
    if (!value) {
      return undefined;
    }
    const gapValue = getGapValue(key, breakpoint ?? 'xs', gap);
    if (!gapValue) {
      return { [prop]: `${value * 100}%` };
    }
    return { [prop]: `calc(${value * 100}% - ${gapValue})` };
  };

export const customFunctionOffset =
  (key: 'columnGap' | 'rowGap', prop: string, gap?: FlexContextGap) =>
  (_: string, value: any, breakpoint?: string | number) => {
    if (!value) {
      return undefined;
    }
    const gapValue = getGapValue(key, breakpoint ?? 'xs', gap);
    if (!gapValue) {
      return { [prop]: `${value * 100}%` };
    }
    const regex = /^([+-]?\d+(?:\.\d+)?)(\S+)$/g;
    const [, numberString, unit] = gapValue.split(regex);
    return { [prop]: `calc(${value * 100}% + ${parseFloat(numberString) / 2}${unit})` };
  };

export const getGapContextAllBreakpoints = (
  breakpointsSorted: Breakpoints,
  gap?: FlexContextGap
): FlexContextGap => {
  if (!gap) {
    return {
      rowGap: '0px',
      columnGap: '0px',
    };
  }
  // no gap breakpoints
  if (!hasGapBreakpoints(gap)) {
    return gap;
  }

  let lastGap: FlexContextGap = {
    rowGap: '0px',
    columnGap: '0px',
  };
  const gapContext: FlexContextGap = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const breakpoint of breakpointsSorted) {
    const gapBreakpoint = (gap as any)[breakpoint.breakpoint];
    if (gapBreakpoint) {
      // @ts-ignore
      gapContext[breakpoint.breakpoint] = gapBreakpoint;
      lastGap = gapBreakpoint;
    } else {
      // @ts-ignore
      gapContext[breakpoint.breakpoint] = lastGap;
    }
  }

  return gapContext;
};

export const getAllBreakpoints = (
  breakpointsSorted: Breakpoints,
  defaultValue: number | null,
  valueInput?: LiteralOrBreakpoints<number>
): LiteralOrBreakpoints<number> => {
  const value =
    typeof valueInput === 'object'
      ? valueInput
      : { [breakpointsSorted[0].breakpoint]: valueInput ?? defaultValue };

  let lastValue = defaultValue;
  const valueBreakpoints: LiteralOrBreakpoints<number> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const breakpoint of breakpointsSorted) {
    const valueBreakpoint = (value as any)[breakpoint.breakpoint];
    if (valueBreakpoint) {
      // @ts-ignore
      valueBreakpoints[breakpoint.breakpoint] = valueBreakpoint;
      lastValue = valueBreakpoint;
    } else {
      // @ts-ignore
      valueBreakpoints[breakpoint.breakpoint] = lastValue;
    }
  }

  return valueBreakpoints;
};
