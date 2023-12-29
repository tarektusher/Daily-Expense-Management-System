import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { CircularProgress, Typography } from '@mui/material';
import IncomeButton from './IncomeButton';
import useExpense from '../hooks/useExpense';

const columns = [
  { field: 'id', headerName: 'Member ID', width: 250 },
  {
    field: 'sourceOfExpense',
    headerName: 'Source Of Expense',
    width: 350,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 250,
    editable: true,
  },
 
];


export default function ExpenseList() {
  const [userData, setUserData] = React.useState();
    const {data, isError, isLoading, error} = useExpense.useGetExpenseList();
    React.useEffect(()=>{
         setUserData(data?.data);
         // eslint-disable-next-line
    })
    if(isLoading){
        return <CircularProgress/>
    }

    let rows =[];
    if(userData){
        userData.forEach((user)=>{
            const tempData = {
                'id' : user.memberId,
                'sourceOfExpense' : user.sourceOfExpense,
                'amount' : user.amount,
            }
            rows.push(tempData);
        })
        console.log(rows);
    } 
    return (
      <Box>
      <Typography sx={{marginTop : '100px'}}variant="h4">
          Expense Information
      </Typography>
      <IncomeButton name = {"Expense"}/>
      <Box sx = {{width : '100%', marginTop: '20px',display: 'flex', flexWarp : 'warp', justifyContent: 'center', alignItems : 'center' }}>
          <Box sx={{ height: 'fit-content', width: '60%'}}>
          <DataGrid
              rows={rows}
              columns={columns}
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