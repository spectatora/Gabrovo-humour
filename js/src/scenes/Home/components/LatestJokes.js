// React import can be skipped in the future react versions.
import React from 'react';
import { Link } from 'react-router-dom';
// Material UI imports
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
// Application imports
import { useJokes } from '../../../data/api';
import HomeCard from './HomeCard';
import JokesList from '../../../components/Jokes/List';
import RequestStates from '../../../components/RequestState';

export default function LatestJokes({ limit }) {
  const { loading, jokes, error, mutate } = useJokes();

  return (
    <HomeCard
      title="Послени шеги"
      content={
        <RequestStates
          loading={loading}
          error={error}
          onRetry={() => mutate(null)}
        >
          <JokesList jokes={jokes.slice(0, limit)} dividers />
        </RequestStates>
      }
      actions={
        <Box flexGrow={1} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ListIcon />}
            component={Link}
            to="/jokes"
          >
            Още смях
          </Button>
        </Box>
      }
    />
  );
}
