import { ComponentType } from 'react';
import { ThemedStyledProps, CSSProperties } from 'styled-components';
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
  ServerStyleSheet,
} from './external';
import type { DefaultTheme } from './external';
import resetCSS from './global/resetCSS';
import {
  parseGap,
  getLiteralOrBreakpointValue,
  getLiteralOrBreakpointString,
  getSpacing,
  getFlexItem,
  getFlexContainer,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
  merge,
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
  HeadingSkins,
  TextSkins,
  ButtonSkins,
  LinkSkins,
  DividerSkins,
  OverlaySkins,
  TextfieldSkins,
  CheckboxSkins,
  AccordionSkins,
  DirectOrStylesProp,
  SpacingKey,
  ZIndexKey,
  BreakpointKey,
  ColorKey,
  FontKey,
  FontSizeKey,
  LineHeightKey,
} from './styles';

// external export
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

export {
  resetCSS,
  media,
  useBreakpointsSorted,
  parseGap,
  getLiteralOrBreakpointValue,
  getLiteralOrBreakpointString,
  getSpacing,
  getFlexItem,
  getFlexContainer,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
  merge,
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
  DefaultTheme,
  HeadingSkins,
  TextSkins,
  ButtonSkins,
  LinkSkins,
  DividerSkins,
  OverlaySkins,
  TextfieldSkins,
  CheckboxSkins,
  AccordionSkins,
  ThemedStyledProps,
  CSSProperties,
  DirectOrStylesProp,
  SpacingKey,
  ZIndexKey,
  BreakpointKey,
  ColorKey,
  FontKey,
  FontSizeKey,
  LineHeightKey,
};
