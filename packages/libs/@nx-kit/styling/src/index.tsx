/// <reference types="styled-components/cssprop" />
import { ComponentType } from 'react';
import type {} from 'styled-components/cssprop';
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
} from './theme';

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
