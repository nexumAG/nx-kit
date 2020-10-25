import { ComponentType } from 'react';
import { media, useBreakpointsSorted } from './utils';
import type { Theme } from './theme';
import {
  styled,
  css,
  useTheme,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  StyleSheetManager,
} from './external';
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
  compose,
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

// external export
export { styled, css, useTheme, createGlobalStyle, keyframes, ThemeProvider, StyleSheetManager };

export {
  resetCSS,
  media,
  useBreakpointsSorted,
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
  compose,
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
