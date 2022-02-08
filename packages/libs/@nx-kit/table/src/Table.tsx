import React, { useRef } from 'react';
import { useTable } from '@react-aria/table';
import { Cell, Column, Row, TableBody, TableHeader, useTableState } from '@react-stately/table';
import {
  compose,
  getColor,
  getFlexItem,
  getFont,
  getLayout,
  getPosition,
  getSpacing,
  getTypo,
  styled,
} from '@nx-kit/styling';
import { TableProps, TableStyledProps } from './Table.types';
import { TableRowGroup } from './partials/TableRowGroup';
import { TableHeaderRow } from './partials/TableHeaderRow';
import { TableSelectAllCell } from './partials/TableSelectAllCell';
import { TableColumnHeader } from './partials/TableColumnHeader';
import { TableRow } from './partials/TableRow';
import { TableCheckboxCell } from './partials/TableCheckboxCell';
import { TableCell } from './partials/TableCell';

const TableStyled = styled.table<TableStyledProps>`
  ${({ theme }) => theme?.component?.table?.global}
  ${({ theme, skin }) => skin && theme?.component?.table?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const Table = <T extends object>({ className, skin, styles, ...props }: TableProps<T>) => {
  const { selectionMode, selectionBehavior } = props;
  const state = useTableState({
    ...props,
    showSelectionCheckboxes: selectionMode === 'multiple' && selectionBehavior !== 'replace',
  });

  const ref = useRef(null);
  const { collection } = state;
  const { gridProps } = useTable(props, state, ref);

  return (
    <TableStyled className={className} skin={skin} styles={styles} {...gridProps} ref={ref}>
      <TableRowGroup type="thead">
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {[...headerRow.childNodes].map((column) =>
              column.props?.isSelectionCell ? (
                <TableSelectAllCell key={column.key} column={column} state={state} />
              ) : (
                <TableColumnHeader key={column.key} column={column} state={state} />
              )
            )}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup type="tbody">
        {[...collection.body.childNodes].map((row) => (
          <TableRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) =>
              cell.props.isSelectionCell ? (
                <TableCheckboxCell key={cell.key} cell={cell} state={state} />
              ) : (
                <TableCell key={cell.key} cell={cell} state={state} />
              )
            )}
          </TableRow>
        ))}
      </TableRowGroup>
    </TableStyled>
  );
};

Table.Cell = Cell;
Table.Column = Column;
Table.Row = Row;
Table.Body = TableBody;
Table.Header = TableHeader;
