import { ReactNode } from 'react';
import {
  As,
  FlexContainer,
  Position,
  Color,
  Spacing,
  Layout,
  FlexItem,
  LiteralOrBreakpoints,
} from '@react-kit/styling';

type Styles = Spacing & Position & Color & Layout;

type FlexType = 'flex' | 'inline-flex' | 'none';

export type FlexProps = {
  className?: string;
  children: ReactNode;
  as?: As;
  styles?: Styles;
  flexType?: FlexType;
  col?: LiteralOrBreakpoints<number>;
  row?: LiteralOrBreakpoints<number>;
  colOffset?: LiteralOrBreakpoints<number>;
} & FlexContainer &
  FlexItem;

export type FlexStyledProps = {
  styles?: Styles;
  flexType?: FlexType;
  col?: any;
  row?: any;
  colOffset?: any;
} & FlexContainer &
  FlexItem;
