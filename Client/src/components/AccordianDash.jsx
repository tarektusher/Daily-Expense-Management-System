import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useExpense from '../hooks/useExpense';
import useIncome from '../hooks/useIncome';

let ExpenseMemberId = 0;
let ExpenseAmount = 0;
let sourceofexpense = "bazar"
let IncomeMemberId = 0;
let IncomeAmount = 0;
let sourceofincome= "bazar"
export default   function  BasicAccordion() {
    const [latestExpense, setLatestExpense] = React.useState(null);
    const [latestIncome, setLatestIncome] = React.useState(null);
    const responseExpense = useExpense.useGetLatestExpense();
    const responseIncome = useIncome.useGetLatestIncome();
    const fetchLatestExpense = async () =>{
      await setLatestExpense(responseExpense?.data?.data);
      if(latestExpense){
        ExpenseMemberId = latestExpense.memberId;
        ExpenseAmount = latestExpense.amount;
        sourceofexpense = latestExpense.sourceOfExpense;
      }
    }
    React.useEffect(()=>{
      fetchLatestExpense();
    })

    const fetchLatestIncome = async () =>{
      // console.log(responseIncome);
      await setLatestIncome(responseIncome?.data?.data);
      // console.log(latestIncome)
      if(latestIncome){
        IncomeMemberId = latestIncome.memberId;
        IncomeAmount = latestIncome.amount;
        sourceofincome = latestIncome.sourceOfIncome;
      }
    }
    React.useEffect(()=>{
      fetchLatestIncome();
    })
    

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'>Income</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign : 'left'}}>
            Member Id : {IncomeMemberId}
          </Typography>
          <Typography sx={{textAlign : 'left'}}>
            Source of Income : {sourceofincome}
          </Typography>
          <Typography sx={{textAlign : 'left'}}>
            Amount : {IncomeAmount}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6'>Expense</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{textAlign : 'left'}}>
            Member Id : {ExpenseMemberId}
          </Typography>
          <Typography sx={{textAlign : 'left'}}>
            Source of Expense : {sourceofexpense}
          </Typography>
          <Typography sx={{textAlign : 'left'}}>
            Amount : {ExpenseAmount}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Users</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}