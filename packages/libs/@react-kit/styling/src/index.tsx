// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from 'styled-components/cssprop';
import * as styledComponents from 'styled-components';
import { media } from './utils';
import type { Theme } from './theme';
import resetCSS from './global/resetCSS';
import {
  getSpacing,
  getFlexItem,
  getFlexContainer,
  getPosition,
  getColor,
  getLayout,
  getFont,
} from './styles';
import type { Spacing, FlexItem, FlexContainer, Position, Color, Layout, Font } from './styles';

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
  getSpacing,
  getFlexItem,
  getFlexContainer,
  getPosition,
  getColor,
  getLayout,
  getFont,
};

export type { Theme, Spacing, FlexItem, FlexContainer, Position, Color, Layout, Font };
