import { ReactNode } from 'react';
import {
  As,
  FlexItem,
  Position,
  Color,
  Spacing,
  Layout,
  LiteralOrBreakpoints,
} from '@react-kit/styling';

type Styles = Spacing & Position & Color & Layout;

export type ItemProps = {
  className?: string;
  children: ReactNode;
  as?: As;
  styles?: Styles;
  width?: LiteralOrBreakpoints<number>;
  height?: LiteralOrBreakpoints<number>;
  offsetLeft?: LiteralOrBreakpoints<number>;
  offsetTop?: LiteralOrBreakpoints<number>;
} & FlexItem;

export type ItemStyledProps = {
  styles?: Styles;
  itemWidth?: any;
  itemHeight?: any;
  itemOffsetLeft?: any;
  itemOffsetTop?: any;
} & FlexItem;
