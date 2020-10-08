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
    overlayWrapper: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
  };
  component: {
    heading: {
      global?: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    text: {
      global?: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    button: {
      global?: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    link: {
      global?: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    divider: {
      global?: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    overlay: {
      global?: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
    textfield: {
      global?: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      skin: {
        [key: string]: string | FlattenInterpolation<ThemedStyledProps<any, Theme>>;
      };
    };
  };
};
