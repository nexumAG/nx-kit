// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from 'styled-components/cssprop';
import * as styledComponents from 'styled-components';
import { Theme, media } from './theme';
import resetCSS from './global/resetCSS';

const {
  default: styled,
  css,
  useTheme,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  StyleSheetManager,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  styled,
  css,
  useTheme,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  StyleSheetManager,
  Theme,
  resetCSS,
  media,
};
