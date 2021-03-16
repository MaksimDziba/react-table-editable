import React, { CSSProperties, MouseEventHandler, PropsWithChildren, ReactElement, useEffect } from 'react';

import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { styles } from "./css";

import {
  Cell,
  CellProps,
  ColumnInstance,
  FilterProps,
  HeaderGroup,
  HeaderProps,
  Hooks,
  Meta,
  Row,
  TableInstance,
  TableOptions,
  useColumnOrder,
  useExpanded,
  useFilters,
  useFlexLayout,
  useGroupBy,
  usePagination,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table'


export interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T> {
  columns: any;
  data: any;
  updateMyData: (rowIndex: any, columnId: any, value: any) => void ;
  skipPageReset: boolean;
  // onAdd?: (instance: TableInstance<T>) => MouseEventHandler
  // onDelete?: (instance: TableInstance<T>) => MouseEventHandler
  // onEdit?: (instance: TableInstance<T>) => MouseEventHandler
  // onClick?: (row: Row<T>) => void
}

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
}: {
  value: any;
  row: any,
  column: any,
  updateMyData: (rowIndex: any, columnId: any, value: any) => void,
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
}

function Table<T extends Record<string, unknown>>(props: PropsWithChildren<TableProperties<T>>): ReactElement {

  const classes = styles({border: false});
  const { columns, data, updateMyData, skipPageReset } = props;

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable<T>(
    {
      columns,
      data,
      // @ts-ignore
      updateMyData,
    },
    usePagination
  )

  return (
    <MaUTable {...getTableProps()} className={classes.table}>
      <TableHead>
        {headerGroups.map((headerGroup: any) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row: any, i: number) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                prepareRow(row)
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
}

export { Table };
