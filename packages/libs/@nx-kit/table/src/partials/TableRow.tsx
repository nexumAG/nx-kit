import { useTableRow } from '@react-aria/table';
import React, { useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { TableRowProps } from '../Table.types';

export const TableRow = ({ item, children, state }: TableRowProps) => {
  const ref = useRef(null);

  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps, isPressed } = useTableRow(
    {
      node: item,
    },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  const classes = [];

  if (isSelected) classes.push('isSelected');
  if (isPressed) classes.push('isPressed');
  if (item.index % 2) classes.push('odd');
  if (isFocusVisible) classes.push('isFocused');

  return (
    <tr className={classes.join(' ')} {...mergeProps(rowProps, focusProps)} ref={ref}>
      {children}
    </tr>
  );
};
