import { ReactNode } from 'react';
import { FlexContainer, Position, Color, Spacing, Layout } from '@react-kit/styling';

export type FlexTag = 'div' | 'span' | 'p';

type Styles = Spacing & Position & Color & Layout;

export type FlexProps = {
  className?: string;
  children: ReactNode;
  tag?: FlexTag;
  styles?: Styles;
  inline?: boolean;
} & FlexContainer;

export type FlexStyledProps = {
  styles?: Styles;
  inline?: boolean;
} & FlexContainer;
