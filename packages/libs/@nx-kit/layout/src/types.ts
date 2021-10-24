import { ReactNode } from 'react';
import { As, Spacing, Position, Color, Layout, Font, Typo, FlexContainer } from '@nx-kit/styling';

type StackStyles = Spacing & Position & Color & Layout & Font & Typo;
type SpacerStyles = StackStyles & FlexContainer;

export type VerticalAlignment = 'stretch' | 'top' | 'center' | 'bottom' | 'baseline';
export type HorizontalAlignment = 'left' | 'center' | 'right';

export type HStackProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  alignment?: VerticalAlignment;
  spacing?: string | number;
  styles?: StackStyles;
};

export type HStackStyledProps = StackStyles;

export type VStackProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  alignment?: HorizontalAlignment;
  spacing?: string | number;
  styles?: StackStyles;
};

export type VStackStyledProps = StackStyles;

export type SpacerProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  styles?: SpacerStyles;
};

export type SpacerStyledProps = SpacerStyles;
