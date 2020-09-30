import { ReactNode } from 'react';
import { As, FlexContainer, Position, Color, Spacing, Layout } from '@react-kit/styling';

type Styles = Spacing & Position & Color & Layout;

export type FlexProps = {
  className?: string;
  children: ReactNode;
  as?: As;
  styles?: Styles;
  inline?: boolean;
} & FlexContainer;

export type FlexStyledProps = {
  styles?: Styles;
  inline?: boolean;
} & FlexContainer;
