import { ReactNode } from 'react';
import { As, Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

// TODO: if heading is optional, maybe a conditional type can help
// https://mariusschulz.com/blog/conditional-types-in-typescript
export type HeadingSkin = keyof Theme['component']['heading']['skin'];

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
