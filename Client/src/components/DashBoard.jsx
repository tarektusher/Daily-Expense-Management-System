
import Stack from "@mui/material/Stack";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import "../../src/App.css";
import useIncome from "../hooks/useIncome";
import useExpense from "../hooks/useExpense";
import BasicAccordion from "./AccordianDash";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function DashBoard() {
  const [totalIncome, setTotalIncome] = React.useState(0);
  const [totalExpense, setTotalExpense] = React.useState(0);
  const isFatchData = React.useRef(false);
  const response = useIncome.useGetAllIncome();
  const responseExpense = useExpense.useGetAllExpense();
  const [daysInMonth, setDaysInMonth] = React.useState(null);

  React.useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    setDaysInMonth(lastDayOfMonth);
  }, []);

  const fetchincome = async () =>{
    console.log(response);
    setTotalIncome(response.data?.data || 0);
    console.log(totalIncome);
  }
    React.useEffect(()=>{
    fetchincome();
  },[])

  const fetchexpense = async () =>{
    console.log(responseExpense);
    setTotalExpense(responseExpense.data?.data || 0);
    console.log(totalIncome);
  }
    React.useEffect(()=>{
    fetchexpense();
  },[])
  const avgIncome = (totalIncome/daysInMonth) || 0;
  const avgExpense = (totalExpense/daysInMonth) || 0;
  return (
    <div className="bgColor">
      <Box sx={{display : 'flex'}}>
        <Typography variant = "h3" sx={{margin : '5px', marginLeft : '30vw'}}>
        <span className="Emp">Employee</span> Dashboard
        </Typography>
        {/* <Button variant="contained" sx={{ margin: "auto" }} onClick={()=>navigate('/employee')}>Live Employee Look</Button> */}
      </Box>
      <Box sx={{flexGrow: 1, marginLeft: "20vw",  marginRight: "6vh", marginTop : '5vh' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack direction="row" spacing={2}>
              <Card sx={{ minWidth: "49%", height: 140 }} className="gradient">
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ECEFF1" }}
                    >
                      Total Amout of Income this month
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#ECEFF1" }}>
                      {totalIncome}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                sx={{ minWidth: "49%", height: 140 }}
                className="gradientLight"
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ECEFF1" }}
                    >
                      Total Amount of Expense This Month
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#ECEFF1" }}>
                      {totalExpense}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Card
                sx={{ maxWidth: "100vh", color: "#ECEFF1" }}
                className="gradient"
              >
                {/* <div className="iconStyle"><CurrencyExchangeIcon/></div> */}
                <Stack direction={"col"} sx={{marginLeft : '10px'}}>
                  <div className="paddingall">
                    <span className="priceTitle">{avgIncome.toFixed(2)} Tk</span>
                    <br />
                    <span className="priceSubTitle">Average Income Per Day</span>
                  </div>
                </Stack>
              </Card>
              <Card
                sx={{ maxWidth: "100vh", color: "#ECEFF1" }}
                className="gradientLight"
              >
                <div className="iconStyle">{/* <CurrencyExchangeIcon/> */}</div>
                <Stack direction={"col"}>
                  <div className="paddingall">
                    <span className="priceTitle">{avgExpense.toFixed(2)} Tk</span>
                    <br />
                    <span className="priceSubTitle">Average Expense Per Day</span>
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        <Box height={20}></Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height: 65 + "vh" }}>
              <CardActionArea>
                <CardContent>
                    {/* <Barchart/> */}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 65 + "vh" }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h4" sx={{marginBottom : '50px'}}>Latest Action</Typography>
                  <BasicAccordion />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
