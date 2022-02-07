import { useTableRowGroup } from '@react-aria/table';
import React from 'react';
import { TableRowGroupProps } from '../Table.types';

export const TableRowGroup = ({ type: Element, style, children }: TableRowGroupProps) => {
  const { rowGroupProps } = useTableRowGroup();

  return (
    <Element {...rowGroupProps} style={style}>
      {children}
    </Element>
  );
};
