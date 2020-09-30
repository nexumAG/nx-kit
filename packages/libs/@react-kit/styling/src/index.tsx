import { ComponentType } from 'react';
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from 'styled-components/cssprop';
import * as styledComponents from 'styled-components';
import { media } from './utils';
import type { Theme } from './theme';
import resetCSS from './global/resetCSS';
import {
  parseGap,
  getLiteralOrBreakpointValue,
  getSpacing,
  getFlexItem,
  getFlexContainer,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
} from './styles';
import type {
  Breakpoints,
  LiteralOrBreakpoints,
  Spacing,
  FlexItem,
  FlexContainer,
  Position,
  Color,
  Layout,
  Font,
  Typo,
} from './styles';

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
  resetCSS,
  media,
  parseGap,
  getLiteralOrBreakpointValue,
  getSpacing,
  getFlexItem,
  getFlexContainer,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
};

// eslint-disable-next-line no-undef
export type As = keyof JSX.IntrinsicElements | ComponentType<any>;

export type {
  Theme,
  Breakpoints,
  LiteralOrBreakpoints,
  Spacing,
  FlexItem,
  FlexContainer,
  Position,
  Color,
  Layout,
  Font,
  Typo,
};
