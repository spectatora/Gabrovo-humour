// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
// Application imports
import LatestJokes from './components/LatestJokes';
import RandomJoke from './components/RandomJoke';
// Asserts
import cat_image from './assets/cat.jpg';

export default function Home() {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <img src={cat_image} alt="cat" width={150} />
        </Box>
        <Typography variant="h3" align="center">
          Welcome
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          <i>to the world of humor</i>
        </Typography>
        <Typography align="justify">
          Here you can browse tons of funny native jokes about Gabrovo and its
          folks. Get a quick impression by checking a random joke or check the
          full list.{' '}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} style={{ alignSelf: "stretch" }}>
        <RandomJoke />
      </Grid>
      <Grid item xs>
        <Box minHeight={300}>
          <LatestJokes limit={3} />
        </Box>
      </Grid>
    </Grid>
  );
}
