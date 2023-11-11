import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === '#000000' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          My Family My World
        </Typography>
        <Typography variant="h2" component="div" sx={{fontWeight : '600',textAlign : 'center', fontFamily : 'Times New Roman'}}>
          Get my <br/>
          Finances Under <br/>
          Control
        </Typography>
      </CardContent>
      
    </React.Fragment>
  );
  

export default function HomeElement() {
   const navigate =  useNavigate();
  return (
    <div>
        <Box sx={{ flexGrow: 1,marginTop : '15vh',display : 'flex', marginLeft : '2vw'}} >
        <Grid container spacing={4}>
        {/* <Stack direction="row" spacing={2}> */}
            <Grid item xs={6}>
                <Item>
                    <Box sx={{ minWidth: '49%'}} >
                        <Card variant="contained">{card}
                        <CardActions sx={{textAlign : 'center'}} >
                            <Button size="small" variant='contained' sx={{borderRadius : '25px',backgroundColor : "#000000",padding : '10px', "&:hover" :{
                                backgroundColor : "#707070"
                            }}} onClick={()=>navigate('/about')}>About Me</Button>
                        </CardActions>
                        </Card>
                    </Box>
                </Item>
            </Grid>
            <Grid item xs={6} >
                <Item>
                    <Typography variant='h6'> Family Photo </Typography>
                    <Card variant="contained" sx={{maxWidth: "100vh"}}>
                        <CardMedia
                            component="img"
                            height="320"
                            image={require("../assets/emp1-removebg-preview.png")}
                            alt="Family Photo"
                        />
                    </Card>
                </Item>
            </Grid>
        {/* </Stack> */}
        </Grid>
        </Box>
    </div>
  );
}