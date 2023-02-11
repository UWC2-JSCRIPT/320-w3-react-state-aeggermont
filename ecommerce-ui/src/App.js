import logo from './logo.svg';
import './App.css';
import VacationRental from './VacationRental/VacationRental';
import { makeStyles } from '@material-ui/core';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import {  Paper } from "@material-ui/core";
import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Chevrolet from './card-car.png';
import bnbs from './bnbs.json'

/*
  xs, extra-small: 0px
  sm, small: 600px
  md, medium: 960px
  lg, large: 1280px
  xl, extra-large: 1920px

  https://blog.logrocket.com/guide-mui-grid-system/
  https://webdevassist.com/reactjs-materialui/grid-component
  https://refine.dev/blog/material-ui-card/
  https://mui.com/system/flexbox/
  https://mui.com/material-ui/react-card/
  https://stackoverflow.com/questions/60795548/material-ui-responsive-cards
  https://medium.com/bytesizedcode/keeping-track-of-on-off-states-of-react-components-7dcec0d885cc
  */

const useStyles = makeStyles((theme) => ({
  container: {
      border: '3px solid purple',
      padding: '10px',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
      },
  },
  item: {
      padding: '10px',
      border: '1px solid lightblue',
  },
}));


const PaperComponent = (props) => (
  <Paper
    style={{
      backgroundColor: props.color,
      color: "white",
      width: "100",
      height: "100"
    }}
  >
    Paper 1
  </Paper>
);

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 2,
        m: 10,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

function  CardDemo(props) {
  const title = props.properyInfo.title;
  const image = props.properyInfo.image;

  console.log('PROPS');
  console.log(props);
  return (
    <div style={{margin: '2%'}}>
      <Card sx={{ width: '300px', heigh: '257px' }}  xs={12} sm={4} md={3} lg={3} >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Chevrolet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chevrolet is an iconic American car brand known for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

function GridExample () {
  return (
    <div className="App">
      <Grid spacing={3}
        container
        direction="row">
        <Grid item xs={12} sm={4} md={3} lg={3} spacing={3} >
          <VacationRental color="red" property="One" />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} spacing={3}>
          <VacationRental color="blue" property="Two"  />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} spacing={3}>
          <VacationRental color="green" property="Three"  />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} spacing={3}>
          <VacationRental color="red" property="Four"  />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} spacing={3}>
          <VacationRental color="blue" property="Five"  />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} spacing={3}>
          <VacationRental color="green" property="Six"  />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} spacing={3}>
          <VacationRental color="red" property="Seven"  />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} spacing={3}>
          <VacationRental color="blue" property="Eight"  />
        </Grid>
      </Grid>
    </div>
  )
}

function App() {

  bnbs.map(propery => (
    console.log(propery)
  ));

  return (
    <div>
      <Box
       
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          height: '100%',
          width: '100%',
          borderRadius: 1,
        }}
      >
        { bnbs.map(propery => (
          <CardDemo properyInfo={propery} />
        ))}
          
         
         
       
      </Box>
    </div>
  );
}

export default App;
