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
  HeadingSkins,
  DefaultTheme,
} from '@nx-kit/styling';

// @ts-ignore
export type HeadingSkin = HeadingSkins<DefaultTheme>;

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type HeadingProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  elementType?: As;
  skin?: HeadingSkin;
  styles?: Styles;
  slot?: string;
};

export type HeadingStyledProps = {
  skin?: HeadingSkin;
  styles?: Styles;
};
