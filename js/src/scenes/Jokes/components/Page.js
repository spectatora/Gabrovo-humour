// React import can be skipped in the future react versions.
import React, { useCallback, useEffect, useState } from 'react';
// Material UI imports
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
// Application imports
import * as api from '../../../data/api';
import JokesList from '../../../components/Jokes/List';
import Loading from '../../../components/RequestState/Loading';
import Error from '../../../components/RequestState/Error';

function Page({ page, isLast, setPages }) {
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
    return <Loading />;
  }

  // render error state
  if (error) {
    return (
      <Error
        onRetry={() => {
          setError(null);
          setLoading(true);
          loadJokes();
        }}
      />
    );
  }

  return (
    <>
      <JokesList jokes={jokes} dividers />
      {isLast && (
        <Box display="flex" justifyContent="center" pt={2}>
          <Button
            variant="outlined"
            color="primary"
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
export default React.memo(Page);
