import {
  Color,
  DefaultTheme,
  FlexItem,
  Font,
  Layout,
  Position,
  Spacing,
  TableSkins,
  Typo,
} from '@nx-kit/styling';
import { TableStateProps } from '@react-stately/table';
import { GridProps } from '@react-aria/grid';
import { Layout as VirtualizerLayout } from '@react-stately/virtualizer';
import { Node } from '@react-types/shared';
import { ReactNode } from 'react';

// @ts-ignore
export type TableSkin = TableSkins<DefaultTheme>;
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

interface TablePropsSpectrum<T> extends GridProps {
  layout?: VirtualizerLayout<Node<T>>;
  styles?: Styles;
}

export type TableStyledProps = {
  skin?: TableSkin;
  styles?: Styles;
};

export type TableProps<T> = {
  className?: string;
  skin?: string;
  styles?: Styles;
} & TableStateProps<T> &
  TablePropsSpectrum<T>;

export type TableRowGroupProps = {
  className?: string;
  type: any;
  children: ReactNode;
};

export type TableRowProps = {
  className?: string;
  item: any;
  children: any;
  state: any;
};

export type TableHeaderRowProps = {
  className?: string;
  item: any;
  state: any;
  children: any;
};

export type TableColumnHeaderProps = {
  column: any;
  state: any;
  className?: string;
};

export type TableCellProps = {
  className?: string;
  cell?: any;
  state?: any;
};

export type TableCheckboxCellProps = {
  state: any;
  cell: any;
};
export type TableSelectAllCellProps = {
  state: any;
  column: any;
};
