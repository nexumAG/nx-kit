import * as styledComponents from 'styled-components';

export declare interface DefaultTheme {
  [key: string]: any;
}

const {
  default: styled,
  css,
  useTheme,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  StyleSheetManager,
  ServerStyleSheet,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<DefaultTheme>;

export {
  styled,
  css,
  useTheme,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  StyleSheetManager,
  ServerStyleSheet,
};
