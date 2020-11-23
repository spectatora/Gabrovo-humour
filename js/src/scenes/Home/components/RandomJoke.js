// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// Application imports
import HomeCard from './HomeCard';
import { useJokes } from '../../../data/api';
import JokesList from '../../../components/Jokes/List';
import RequestStates from '../../../components/RequestState';

export default function RandomJoke() {
  const { loading, jokes, error, mutate } = useJokes(1, 1, 'random');

  return (
    <HomeCard
      title="Случайна шега"
      content={
        <RequestStates
          loading={loading}
          error={error}
          onRetry={() => mutate(null)}
        >
          <JokesList jokes={jokes} />
        </RequestStates>
      }
      headAction={
        <IconButton
          disabled={Boolean(error) || loading}
          onClick={() => mutate(null)}
        >
          <NavigateNextIcon />
        </IconButton>
      }
    />
  );
}
