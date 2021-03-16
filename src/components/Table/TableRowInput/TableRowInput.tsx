import React from 'react';
import { makeStyles, InputBase } from '@material-ui/core';

const useStyles = makeStyles({
  _input: {
    padding: '5px 10px',
    backgroundColor: '#eee',
    color: '#07874B',
  }
})


const TableRowInput = ({
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
  const classes = useStyles();
  const [value, setValue] = React.useState(initialValue)

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    updateMyData(index, id, value)
  }

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <InputBase className={classes._input} value={value} onChange={onChange} onBlur={onBlur} />
}

export { TableRowInput }