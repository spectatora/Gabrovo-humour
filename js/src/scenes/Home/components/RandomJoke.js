// React import can be skipped in the future react versions.
import React, { useCallback, useEffect, useState } from 'react';
// Material UI imports
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// Application imports
import * as api from '../../../data/api';
import HomeCard from './HomeCard';
import JokesList from '../../../components/Jokes/List';
import Loading from '../../../components/RequestState/Loading';
import Error from '../../../components/RequestState/Error';

export default function RandomJoke() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadJoke = useCallback(() => {
    api
      .getRandomJoke()
      .then((response) => setJoke(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    loadJoke();
  }, [loadJoke]);

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
            loadJoke();
          }}
        />
      );
    }

    return <JokesList jokes={[joke]} />;
  };

  return (
    <HomeCard
      title="Random joke"
      content={<CardContent />}
      headAction={
        <IconButton
          disabled={Boolean(error) || loading}
          onClick={() => {
            setLoading(true);
            loadJoke();
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      }
    />
  );
}
