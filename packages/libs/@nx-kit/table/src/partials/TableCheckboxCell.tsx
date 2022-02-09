import React, { useRef } from 'react';
import { useTableCell, useTableSelectionCheckbox } from '@react-aria/table';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox } from '@react-aria/checkbox';
import { TableCheckboxCellProps } from '../Table.types';

export const TableCheckboxCell = ({ cell, state }: TableCheckboxCellProps) => {
  const ref = useRef(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { checkboxProps } = useTableSelectionCheckbox({ key: cell.parentKey }, state);

  const inputRef = useRef(null);
  const { inputProps } = useCheckbox(checkboxProps, useToggleState(checkboxProps), inputRef);

  return (
    <td {...gridCellProps} ref={ref}>
      <input {...inputProps} />
    </td>
  );
};
