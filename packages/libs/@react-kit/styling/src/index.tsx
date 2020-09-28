// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from 'styled-components/cssprop';
import * as styledComponents from 'styled-components';

type Theme = {
  global: {
    color: {
      [key: string]: string;
    };
    breakpoint: {
      [key: string]: string;
    };
  };
  component: {
    heading: {
      skin: {
        [key: string]: string;
      };
    };
  };
};

const {
  default: styled,
  css,
  useTheme,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  styled,
  css,
  useTheme,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  Theme,
};
