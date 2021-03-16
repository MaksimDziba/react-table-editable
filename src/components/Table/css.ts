import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export const styles = makeStyles((theme: Theme) => ({
  table: ({ border }: { border: boolean }) => ({
    zIndex: 1,
    position: 'relative',
    border: border ? '1px solid #D9DFE5' : '0',
    '& .MuiTableCell-head': {
      userSelect: 'none',
      padding: '0px',
      background: 'white',
      border: 'none',
      height: '50px',
      '& .headCellWrapper': {
        height: '100%',
        fontWeight: 'bold',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        padding: '0 16px',
        borderBottom: '1px solid #D9DFE5',
        lineHeight: '16px',
        display: 'flex',
        alignItems: 'center',
      }
    },
    '& .MuiTableCell-body': {
      padding: '5px 16px',
      height: '40px',
      fontSize: '13px',
    },
  }),
  tableScrollWrapper: {
    position: 'relative',
    height: '100%'
  },
  tableScroll: {
    width: '100%',
    overflow: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    '& .MuiTableCell-head': {
      top: 0,
      position: 'sticky',
      zIndex: 1,
    },
    '& .MuiTableCell-footer': {
      border: 0,
      bottom: 0,
      position: 'sticky',
      padding: '10px 15px',
      background: 'white'
    },

    '&::-webkit-scrollbar': {
      background: 'transparent',
      width: '6px',
      cursor: 'pointer',
    },
    '&::-webkit-scrollbar-button': {
      height: '50px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#D9DFE5',
      borderRadius: '10px',
      cursor: 'pointer',
      '&:hover': {
        background: '#8F949B',
      }
    },
    '&::-webkit-scrollbar-track': {
      width: '12px'
    },
  },
  row: {
    '&:hover': {
      background: '#F8F8F8'
    }
  },
  rowHover: {
    background: '#F8F8F8'
  },
  rowChecked: {
    background: '#EFF1F4',
    '&:hover': {
      background: '#F8F8F8'//'#E8E9EB'
    }
  },
  sortContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    '& .MuiTableSortLabel-root': {
      userSelect: 'text',
      height: '13px',
      justifyContent: 'center',
      '& .MuiSvgIcon-root': {
        fontSize: '0.7rem',
        opacity: 1,
        color: '#8F949B'
      },
      '&:hover .MuiSvgIcon-root': {
        color: 'rgba(0, 0, 0, 0.87)'
      },
      '&.MuiTableSortLabel-active .MuiTableSortLabel-icon': {
        color: 'rgba(0, 0, 0, 0.87)!important'
      }
    },
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px 0',
    '& svg': {},
    '& p': {
      margin: '10px 0',
      width: '160px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      textAlign: 'center',
      color: '#8F949B'
    }
  },
  pagination: {
    '& .MuiTablePagination-spacer': {
      flex: 'none'
    }
  },
  spin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '600px',
    width: '100%'
  },
  line: {
    padding: '8px 8px 12px 16px',
    '&:hover': {
      background: '#EFF1F4;',
    },
  },
  popover: {
    '& .ant-popover-inner-content': {
      padding: '6px 0px',
    },
    '&.ant-popover-placement-bottomRight>.ant-popover-content>.ant-popover-arrow': {
      top: "0px",
      right: "9px",
      left: "auto!important",
    }
  },
  gridpagination: {
    padding: '11px 0',
    borderTop: '1px solid #D9DFE5',
  },
  separator: {
    pointerEvents: 'none',
  }
}));