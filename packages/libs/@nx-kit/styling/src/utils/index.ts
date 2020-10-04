import { ThemeProps } from 'styled-components';
import { Theme, useTheme } from '../theme';

const defaultBreakpoints = {
  xs: { min: 0, max: 575 },
  sm: { min: 576, max: 767 },
  md: { min: 768, max: 991 },
  lg: { min: 992, max: 1199 },
  xl: { min: 1200, max: null },
};

export const media = (
  min: keyof Theme['global']['breakpoint'],
  max?: keyof Theme['global']['breakpoint']
) => {
  return ({ theme }: ThemeProps<Theme>) => {
    const breakpoints = theme?.global?.breakpoint ?? defaultBreakpoints;
    const minValue = `${breakpoints[min]?.min ?? 0}px`;
    const maxValue = !max || !breakpoints[max]?.max ? false : `${breakpoints[max].max}px`;
    return `@media (min-width: ${minValue})${maxValue ? ` and (max-width: ${maxValue})` : ''}`;
  };
};

export const useBreakpointsSorted = (): (string | number)[] => {
  const theme = useTheme();
  const breakpoints = theme?.global?.breakpoint ?? defaultBreakpoints;
  return Object.entries(breakpoints)
    .sort((a, b) => a[1].min - b[1].min)
    .map((a) => a[0]);
};
