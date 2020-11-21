// React import can be skipped in the future react versions.
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Material UI imports
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
// Application imports
import * as api from '../../../data/api';
import HomeCard from './HomeCard';
import JokesList from '../../../components/Jokes/List';
import Loading from '../../../components/RequestState/Loading';
import Error from '../../../components/RequestState/Error';

export default function LatestJokes({ limit }) {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadJokes = useCallback(() => {
    api
      .getJokes(1, limit)
      .then((response) => setJokes(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [limit]);

  useEffect(() => {
    loadJokes();
  }, [loadJokes]);

  const CardContent = () => {
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

    return <JokesList jokes={jokes} dividers />;
  };

  return (
    <HomeCard
      title="Latest jokes"
      content={<CardContent />}
      actions={
        <Box flexGrow={1} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ListIcon />}
            component={Link}
            to="/jokes"
          >
            Browse all
          </Button>
        </Box>
      }
    />
  );
}
