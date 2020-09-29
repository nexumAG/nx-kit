import { ReactNode } from 'react';
import { Theme, Spacing, FlexItem } from '@react-kit/styling';

export type HeadingTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'p'
  | 'th';

export type HeadingSkin = keyof Theme['component']['heading']['skin'];

type Styles = Spacing & FlexItem;

export type HeadingProps = {
  className?: string;
  children: ReactNode;
  tag?: HeadingTag;
  skin?: HeadingSkin;
  styles?: Styles;
};

export type HeadingStyledProps = {
  skin?: HeadingSkin;
  styles?: Styles;
};
