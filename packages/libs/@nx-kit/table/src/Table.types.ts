import { SpectrumTableProps } from '@react-types/table';

export type TableProps<T> = {
  className?: string;
} & SpectrumTableProps<T>;

export type TableRowGroupProps = {
  className?: string;
  type: any;
  style?: any;
  children: any;
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
