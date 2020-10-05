import { FlattenInterpolation, ThemedStyledProps } from 'styled-components';

export type Theme = {
  global: {
    styles?: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
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
    focusRing: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
    underlay: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
  };
  component: {
    heading: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    text: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    button: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    link: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    divider: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    overlay: {
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
  };
};
