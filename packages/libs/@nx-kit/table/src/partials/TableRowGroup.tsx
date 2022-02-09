import { useTableRowGroup } from '@react-aria/table';
import React from 'react';
import { TableRowGroupProps } from '../Table.types';

export const TableRowGroup = ({ type: Element, children }: TableRowGroupProps) => {
  const { rowGroupProps } = useTableRowGroup();

  return <Element {...rowGroupProps}>{children}</Element>;
};
