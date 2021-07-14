import { ReactNode } from 'react';
import {
  As,
  Spacing,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  TextSkins,
  DefaultTheme,
} from '@nx-kit/styling';

// @ts-ignore
export type TextSkin = TextSkins<DefaultTheme>;

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type TextProps = {
  id?: string;
  className?: string;
  role?: string;
  children: ReactNode;
  elementType?: As;
  slot?: string;
  skin?: TextSkin;
  styles?: Styles;
};

export type TextStyledProps = {
  skin?: TextSkin;
  styles?: Styles;
};
