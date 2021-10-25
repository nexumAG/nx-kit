import { ReactNode } from 'react';
import {
  As,
  Spacing,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  FlexContainer,
  LiteralOrBreakpoints,
  SpacingKey,
  CSSProperties,
  DefaultTheme,
} from '@nx-kit/styling';

type StackStyles = Spacing & Position & Color & Layout & Font & Typo;
type SpacerStyles = StackStyles & FlexContainer;

export type Alignment = 'stretch' | 'start' | 'center' | 'end' | 'baseline';

export type HStackSpecialProps = {
  alignment?: LiteralOrBreakpoints<Alignment>;
  spacing?: LiteralOrBreakpoints<SpacingKey | CSSProperties['columnGap']>;
};

// TODO: export from styling
type ThemeBreakpoints = {
  global: {
    breakpoint: {
      [key: string]: { min: number; max: number | null };
    };
  };
};
type BreakpointKeyG<T extends ThemeBreakpoints> = keyof T['global']['breakpoint'];
type BreakpointKey = BreakpointKeyG<DefaultTheme extends ThemeBreakpoints ? DefaultTheme : any>;

export type HStackProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  styles?: StackStyles;
  horizontalBreakpoint?: BreakpointKey;
} & HStackSpecialProps;

export type HStackStyledProps = StackStyles & { horizontalBreakpoint?: BreakpointKey };

export type VStackSpecialProps = {
  alignment?: LiteralOrBreakpoints<Alignment>;
  spacing?: LiteralOrBreakpoints<SpacingKey | CSSProperties['rowGap']>;
};

export type VStackProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  styles?: StackStyles;
} & VStackSpecialProps;

export type VStackStyledProps = StackStyles;

export type SpacerProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  styles?: SpacerStyles;
};

export type SpacerStyledProps = SpacerStyles;