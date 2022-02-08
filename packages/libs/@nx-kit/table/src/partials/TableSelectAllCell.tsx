import { useTableColumnHeader, useTableSelectAllCheckbox } from '@react-aria/table';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import React, { useRef } from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import { TableSelectAllCellProps } from '../Table.types';

export const TableSelectAllCell = ({ column, state }: TableSelectAllCellProps) => {
  const ref = useRef(null);

  const isSingleSelectionMode = state.selectionManager.selectionMode === 'single';
  const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);

  const { checkboxProps } = useTableSelectAllCheckbox(state);
  const inputRef = useRef(null);
  const { inputProps } = useCheckbox(checkboxProps, useToggleState(checkboxProps), inputRef);

  return (
    <th {...columnHeaderProps} ref={ref}>
      {isSingleSelectionMode ? (
        <VisuallyHidden>{inputProps['aria-label']}</VisuallyHidden>
      ) : (
        <input {...inputProps} ref={inputRef} />
      )}
    </th>
  );
};
