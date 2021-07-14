import { ThemeProps } from 'styled-components';
import { useTheme } from '../external';
// import { Theme } from '../theme';

const defaultBreakpoints = {
  xs: { min: 0, max: 575 },
  sm: { min: 576, max: 767 },
  md: { min: 768, max: 991 },
  lg: { min: 992, max: 1199 },
  xl: { min: 1200, max: null },
};

type ThemeBreakpoints = {
  global: {
    breakpoint: {
      [key: string]: { min: number; max: number | null };
    };
  };
};

// TODO: why does it work? T becomes DefaultTheme if no generic is passed
export const media = <T extends ThemeBreakpoints>(
  min: keyof T['global']['breakpoint'],
  max?: keyof T['global']['breakpoint']
) => {
  return ({ theme }: ThemeProps<T>) => {
    const breakpoints = theme?.global?.breakpoint ?? defaultBreakpoints;
    // @ts-ignore
    const minValue = `${breakpoints[min]?.min ?? 0}px`;
    // @ts-ignore
    const maxValue = !max || !breakpoints[max]?.max ? false : `${breakpoints[max].max}px`;
    return `@media (min-width: ${minValue})${maxValue ? ` and (max-width: ${maxValue})` : ''}`;
  };
};

export const useBreakpointsSorted = (): (string | number)[] => {
  const theme = useTheme();
  const breakpoints = theme?.global?.breakpoint ?? defaultBreakpoints;
  return (
    Object.entries(breakpoints)
      // @ts-ignore
      .sort((a, b) => a[1].min - b[1].min)
      .map((a) => a[0])
  );
};
