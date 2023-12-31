import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import AddIcon from '@mui/icons-material/Add';
import {  useNavigate } from 'react-router-dom';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';

export default function IncomeButton(props) {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} direction="row" sx={{marginLeft : '36vw', marginTop : '10px'}}>
      <Button variant="contained" startIcon={<AddIcon/>} onClick={()=>navigate(`add${props.name}`)}>Add {`${props.name}`}</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>navigate('/deleteemployee')}>
        Delete
      </Button>
      <Button variant="contained" startIcon={<EditNoteTwoToneIcon/>} onClick={()=>navigate('/editemployee')}>Edit</Button>
    </Stack>
  );
}