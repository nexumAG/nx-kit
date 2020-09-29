import { FlattenInterpolation, ThemeProps } from 'styled-components';

export type Theme = {
  global: {
    color: {
      [key: string]: string;
    };
    breakpoint: {
      [key: string]: { min: number; max: number | null };
    };
    spacing: {
      [key: string]: string;
    };
    font: {
      [key: string]: string;
    };
    fontSize: {
      [key: string]: string;
    };
    lineHeight: {
      [key: string]: string | number;
    };
    zIndex: {
      [key: string]: number;
    };
  };
  component: {
    heading: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemeProps<Theme>>;
      };
    };
    button: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemeProps<Theme>>;
      };
    };
  };
};
