import { ReactNode } from 'react';
import {
  As,
  Spacing,
  FlexContainer,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
} from '@nx-kit/styling';

type Styles = Spacing & FlexContainer & FlexItem & Position & Color & Layout & Font & Typo;

export type ViewProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
} & Styles;

export type ViewStyledProps = Styles;
