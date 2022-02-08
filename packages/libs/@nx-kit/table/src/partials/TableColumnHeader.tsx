import { useTableColumnHeader } from '@react-aria/table';
import React, { useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { TableColumnHeaderProps } from '../Table.types';

export const TableColumnHeader = ({ column, state }: TableColumnHeaderProps) => {
  const ref = useRef(null);
  const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const classes = [];
  const classesSpan = [];

  if (column.colspan > 1) classes.push('colspan');
  if (isFocusVisible) classes.push('isFocused');

  if (column.props?.allowsSorting && state.sortDescriptor?.direction) {
    classesSpan.push(state.sortDescriptor?.direction);
    classesSpan.push(state.sortDescriptor?.column === column.key ? 'visible' : 'hidden');
  }

  return (
    <th
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={column.colspan}
      className={classes.join(' ')}
      ref={ref}
    >
      {column.rendered}
      {column.props?.allowsSorting && <span aria-hidden="true" className={classesSpan.join(' ')} />}
    </th>
  );
};
