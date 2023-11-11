import React from 'react'
import {useForm, useFieldArray} from 'react-hook-form'
import { DevTool } from "@hookform/devtools"
import employeeeServices from '../services/employeeServices';
import "../../src/Dash.css";
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddIcon from "@mui/icons-material/Add";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const AddExpense = () => {
    const form = useForm({
        defaultValues : {
            fm_id : "",
            source : "",
            amount : 0,
        }
    });
    const { register, control, handleSubmit, formState, getValues, reset } = form;
    const onSubmit = async (data) => {
      const {
        fm_id,
        source,
        amount
      } = data;
      // await employeeeServices.delteEmployee({emp_id,email});
      alert(`::: ${fm_id} Income added Successfully :::`);
    }
  return (
        <div >
            <Box sx={{flexGrow : 1, alignItems : 'center'} } >
                <Typography gutterBottom variant="h3" align="center" sx={{marginTop : '20vh'}}>
                   Add Expense Form
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4} >
                    <Grid item xs>
                    
                    </Grid>
                    <Grid item xs={4} >
                    {/* <Item> */}
                    <Typography variant='h5' color={"text.secondary"}>
                            You can add here your amount of expense
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    <TextField
                          placeholder="Enter Family Member Id"
                          label="Family Memeber Id"
                          {...register("fm_id")}
                          variant="outlined"
                          fullWidth
                          required
                          sx={{marginTop : '30px'}}
                        />
                    <TextField
                          placeholder="Enter Source of Income"
                          label="Source of Expense"
                          {...register("source")}
                          variant="outlined"
                          fullWidth
                          required
                          sx={{marginTop : '20px'}}
                        />
                    <TextField
                          placeholder="Enter Amount of Income"
                          label="Amount of Expense"
                          {...register("amount")}
                          variant="outlined"
                          fullWidth
                          required
                          sx={{marginTop : '20px'}}
                        />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop : '10px',marginBottom : '20px'}}
                        >
                        Submit
                        </Button>
                    </form>
                    <DevTool control={control} />
                    {/* </Item> */}
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </Box>
            </Box>
        </div>
  )
}

export default AddExpense;