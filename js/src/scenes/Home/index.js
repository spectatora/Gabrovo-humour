// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
// Application imports
import LatestJokes from './components/LatestJokes';
import RandomJoke from './components/RandomJoke';
// Asserts
import cat_image from './assets/cat.jpg';

const styles = (theme) => ({
  wrapper: {
    maxWidth: '1560px',
    marginTop: '50px',
    marginRight: 'auto',
    marginBottom: '50px',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingRight: '40px',
      paddingLeft: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: '20px',
      paddingLeft: '20px',
    },
  },
  icon: {
    '& svg': {
      width: '42px',
      height: '42px',
    },
  },
  paddingLeft: {
    paddingLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
    },
  },
  pageTitle: {
    marginBottom: '20px',
  },
});

function Home(props) {
  const {classes} = props;

  return (
    <Grid container className={classes.wrapper}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            MAD - Gabrovo
          </Typography>
          <Typography className={classes.pageTitle} variant="h1">
            Добре дошли в света на хумора.
          </Typography>
          <Typography variant="body1" align="justify">
            Тук ще намерите много забвни Габровски шеги. Пробвайте случайна шега
            или продължете към пълния списък.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{alignSelf: 'stretch'}}>
          <RandomJoke/>
        </Grid>
        <Grid item xs>
          <Box minHeight={300}>
            <LatestJokes limit={3}/>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);