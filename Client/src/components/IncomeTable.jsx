import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { CircularProgress, Typography } from '@mui/material';
import IncomeButton from './IncomeButton';
import useIncome from '../hooks/useIncome';


export default function IncomeTable({props}) {
    const [cols, setCols] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    React.useEffect(()=>{
        setCols(props.cols);
        setRows(props.rows);
    },[props.cols, props.rows]);
    console.log(cols);
    console.log(rows);
    return (
      <Box>
      <Typography sx={{marginTop : '10px'}}variant="h4">
          Employee Information
      </Typography>
      <IncomeButton/>
      <Box sx = {{width : '100%', marginTop: '20px',display: 'flex', justifyContent: 'center', alignItems : 'center' }}>
          <Box sx={{ height: 'fit-content', width: '80%'}}>
          <DataGrid
              rows={rows}
              columns={cols}
              initialState={{
              pagination: {
                  paginationModel: {
                  pageSize: 10,
                  },
              },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
          />
          </Box>
      </Box>
      </Box>
    );
}