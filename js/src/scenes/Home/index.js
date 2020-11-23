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
          Добре дошли
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          <i>в света на хумора.</i>
        </Typography>
        <Typography align="justify">
          Тук ще намерите много забвни Габровски шеги. Пробвайте случайна шега
          или продължете към пълния списък.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} style={{ alignSelf: 'stretch' }}>
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
