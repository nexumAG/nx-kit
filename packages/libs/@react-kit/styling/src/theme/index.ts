import { FlattenInterpolation, ThemeProps } from 'styled-components';

export type Theme = {
  global: {
    color: {
      [key: string]: string;
    };
    breakpoint: {
      [key: string]: { min: number; max: number | null };
    };
  };
  component: {
    heading: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemeProps<Theme>>;
      };
    };
  };
};

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
