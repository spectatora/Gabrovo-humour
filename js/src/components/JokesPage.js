// React import can be skipped in the future react versions.
import React, { useCallback, useEffect, useState } from 'react';
// Material UI imports
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Should always be last
import Box from '@material-ui/core/Box';
// Application imports
import * as api from '../data/api';

function JokesPage({ page, isLast, setPages }) {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadJokes = useCallback(() => {
    api
      .getJokes(page)
      .then((response) => setJokes(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    loadJokes();
  }, [loadJokes]);

  // render loading state
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" pt={2}>
        <CircularProgress />
      </Box>
    );
  }

  // render error state
  if (error) {
    return (
      <Box p={2}>
        <Grid container spacing={2} direction="column" alignItems="center">
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
              onClick={() => {
                setError(null);
                setLoading(true);
                loadJokes();
              }}
            >
              Retry
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  // console.debug('render jokes page', page, loading, error ? error : jokes);

  return (
    <>
      <List disablePadding>
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
      {isLast && (
        <Box display="flex" justifyContent="center" pt={2}>
          <Button
            variant="outlined"
            startIcon={<ExpandMoreIcon />}
            onClick={() => setPages(page + 1)}
          >
            Load more
          </Button>
        </Box>
      )}
    </>
  );
}

// export default JokesPage;
export default React.memo(JokesPage);
