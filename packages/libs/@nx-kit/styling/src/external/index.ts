import * as styledComponents from 'styled-components';
import { Theme } from '../theme';

const {
  default: styled,
  css,
  useTheme,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  StyleSheetManager,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<Theme>;

export { styled, css, useTheme, createGlobalStyle, keyframes, ThemeProvider, StyleSheetManager };
