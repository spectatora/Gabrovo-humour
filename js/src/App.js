// React import can be skipped in the future react versions.
import React, { useState } from 'react';
// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// Application imports
import JokesPage from './components/JokesPage';

const useStyles = makeStyles((theme) => ({
  container: { minHeight: 'calc(100vh - 48px)' },
}));

function App() {
  const [pages, setPages] = useState(1);
  const classes = useStyles();

  // console.debug('render app', pages);

  // prepare 1..pages array
  const pagesArray = Array.from({ length: pages }, (v, k) => k + 1);

  return (
    <Container>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          {pagesArray.map((page) => (
            <JokesPage
              key={page}
              page={page}
              setPages={setPages}
              isLast={pagesArray.length === page}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
