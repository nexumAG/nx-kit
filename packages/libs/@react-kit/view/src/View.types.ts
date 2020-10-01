import { ReactNode } from 'react';
import { As, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@react-kit/styling';

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type ViewProps = {
  className?: string;
  children?: ReactNode;
  as?: As;
} & Styles;

export type ViewStyledProps = Styles;
