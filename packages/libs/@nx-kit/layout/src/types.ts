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
  FlexItem,
} from '@nx-kit/styling';

type Styles = Spacing & Position & Color & Layout & Font & Typo & FlexContainer & FlexItem;

export type Alignment = 'stretch' | 'start' | 'center' | 'end' | 'baseline';
export type ZStackAlignment =
  | 'center'
  | 'top'
  | 'topRight'
  | 'right'
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'left'
  | 'topLeft';

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

export type HStackSpecialProps = {
  alignment?: LiteralOrBreakpoints<Alignment>;
  spacing?: LiteralOrBreakpoints<SpacingKey | CSSProperties['columnGap']>;
};

export type HStackProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  styles?: Styles;
  horizontalBreakpoint?: BreakpointKey;
} & HStackSpecialProps;

export type HStackStyledProps = Styles &
  HStackSpecialProps & { horizontalBreakpoint?: BreakpointKey };

export type VStackSpecialProps = {
  alignment?: LiteralOrBreakpoints<Alignment>;
  spacing?: LiteralOrBreakpoints<SpacingKey | CSSProperties['rowGap']>;
};

export type VStackProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  styles?: Styles;
} & VStackSpecialProps;

export type VStackStyledProps = Styles & VStackSpecialProps;

export type ZStackSpecialProps = {
  alignment?: LiteralOrBreakpoints<ZStackAlignment>;
};

export type ZStackProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  styles?: Styles;
} & ZStackSpecialProps;

export type ZStackStyledProps = Styles & ZStackSpecialProps;

export type SpacerProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  elementType?: As;
  styles?: Styles;
};

export type SpacerStyledProps = Styles;
