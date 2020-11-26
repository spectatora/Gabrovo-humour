// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {makeStyles} from '@material-ui/core/styles';
// Application imports
import HomeCardCat from './HomeCardCat';
import { useJokes } from '../../../data/api';
import JokesList from '../../../components/Jokes/List';
import RequestStates from '../../../components/RequestState';

const useStyles = makeStyles({
  icon: {
    position: 'relative',
    zIndex: '10',
    marginTop: '8px',
    marginLeft: '10px',
    marginRight: '-5px',
    backgroundColor: '#870056',
    border: `5px solid #fd1d62`,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#870056',
    },
  },
});

export default function RandomJoke() {
  const { loading, jokes, error, mutate } = useJokes(1, 1, 'random');
  const classes = useStyles();

  return (
    <HomeCardCat
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
          className={classes.icon}
        >
          <NavigateNextIcon />
        </IconButton>
      }
    />
  );
}
