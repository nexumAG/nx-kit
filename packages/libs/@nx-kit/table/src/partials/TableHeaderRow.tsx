import { useTableHeaderRow } from '@react-aria/table';
import React, { useRef } from 'react';
import { TableHeaderRowProps } from '../Table.types';

export const TableHeaderRow = ({ item, state, children }: TableHeaderRowProps) => {
  const ref = useRef(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <tr {...rowProps} ref={ref}>
      {children}
    </tr>
  );
};
