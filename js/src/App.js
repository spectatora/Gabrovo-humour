// React import can be skipped in the future react versions.
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import Box from '@material-ui/core/Box';

import * as api from './data/api';

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getJokes()
      .then((response) => setJokes(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  // render loading state
  if (loading) {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: 'calc(100vh - 48px)' }}
      >
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  // render error state
  if (error) {
    return (
      <Box p={2}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: 'calc(100vh - 48px)' }}
        >
          <Grid item>
            <ErrorOutlineIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h5">Ops, something went wrong.</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={() => window.location.reload()}
            >
              Reload
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Container>
      <List>
        {jokes.map(({ title, content }, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={title}
              secondary={content.map((line, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                >
                  {line}
                </Typography>
              ))}
              secondaryTypographyProps={{ component: 'div' }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
