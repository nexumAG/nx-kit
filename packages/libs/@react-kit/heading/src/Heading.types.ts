import { ReactNode } from 'react';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@react-kit/styling';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p' | 'th';

// TODO: if heading is optional, maybe a conditional type can help
// https://mariusschulz.com/blog/conditional-types-in-typescript
export type HeadingSkin = keyof Theme['component']['heading']['skin'];

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type HeadingProps = {
  className?: string;
  children: ReactNode;
  as?: HeadingTag;
  skin?: HeadingSkin;
  styles?: Styles;
};

export type HeadingStyledProps = {
  skin?: HeadingSkin;
  styles?: Styles;
};
