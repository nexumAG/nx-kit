import { ThemeProps } from 'styled-components';
import { Theme } from '../theme';

export const media = (
  min: keyof Theme['global']['breakpoint'],
  max?: keyof Theme['global']['breakpoint']
) => {
  return ({ theme }: ThemeProps<Theme>) => {
    const { breakpoint } = theme.global;
    const minValue = `${breakpoint[min]?.min ?? 0}px`;
    const maxValue =
      !max || !breakpoint[max]?.max ? false : `${breakpoint[max].max}px`;
    return `@media (min-width: ${minValue})${
      maxValue ? ` and (max-width: ${maxValue})` : ''
    }`;
  };
};
