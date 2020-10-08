import { ReactNode } from 'react';
import { As, Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

// TODO: if heading is optional, maybe a conditional type can help
// https://mariusschulz.com/blog/conditional-types-in-typescript
export type TextSkin = keyof Theme['component']['text']['skin'];

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type TextProps = {
  id?: string;
  className?: string;
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
