import React from 'react';
import './App.css';
import { Table } from './components/Table';
import CssBaseline from '@material-ui/core/CssBaseline';

import makeData from './makeData';
import { Checkbox } from '@material-ui/core';
import { TableRowInput } from './components/Table/TableRowInput';

function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'checkbox',
        Cell: ({ cell: { value } }: any) => <Checkbox value={value} />,
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
        Cell: ({ cell }: any) => <TableRowInput {...cell} updateMyData={updateMyData} />
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
    []
  )

  const [data, setData] = React.useState(() => makeData(20))
  const [originalData] = React.useState(data)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  function updateMyData(rowIndex: any, columnId: any, value: any) {
    console.log(rowIndex, 'rowIndex')
    console.log(columnId, 'columnId')
    console.log(value, 'value')
    setSkipPageReset(true)
    setData((old: any) =>
      old.map((row: any, index: any) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  React.useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  return (
    <div className="App">
      <CssBaseline />
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
}

export default App;
