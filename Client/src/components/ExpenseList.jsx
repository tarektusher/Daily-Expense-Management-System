import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { CircularProgress, Typography } from '@mui/material';
import IncomeButton from './IncomeButton';
import useIncome from '../hooks/useIncome';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';

const columns = [
  { field: 'id', headerName: 'Member ID', width: 250 },
  {
    field: 'sourceOfIncome',
    headerName: 'source Of Income',
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
    const {data, isError, isLoading, error} = useIncome.useGetIncomeList();
    React.useEffect(()=>{
         setUserData(data?.data);
         
    })
    if(isLoading){
        return <CircularProgress/>
    }

    let rows =[];
    if(userData){
        userData.map((user)=>{
            const tempData = {
                'id' : user.memberId,
                'sourceOfIncome' : user.sourceOfIncome,
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