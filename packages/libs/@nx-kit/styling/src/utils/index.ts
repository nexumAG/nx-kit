import { ThemeProps } from 'styled-components';
import { Theme } from '../theme';

const defaultBreakpoints = {
  breakpoint: {
    xs: { min: 0, max: 575 },
    sm: { min: 576, max: 767 },
    md: { min: 768, max: 991 },
    lg: { min: 992, max: 1199 },
    xl: { min: 1200, max: null },
  },
};

export const media = (
  min: keyof Theme['global']['breakpoint'],
  max?: keyof Theme['global']['breakpoint']
) => {
  return ({ theme }: ThemeProps<Theme>) => {
    const { breakpoint } = theme?.global ?? defaultBreakpoints;
    const minValue = `${breakpoint?.[min]?.min ?? 0}px`;
    const maxValue = !max || !breakpoint?.[max]?.max ? false : `${breakpoint[max].max}px`;
    return `@media (min-width: ${minValue})${maxValue ? ` and (max-width: ${maxValue})` : ''}`;
  };
};
