// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
// Application imports
import { useJokes } from '../../../data/api';
import JokesList from '../../../components/Jokes/List';
import RequestStates from '../../../components/RequestState';
import PinkButton from "../../Home/components/PinkButton";

function Page({ page, isLast, setPages }) {
  const { loading, jokes, error, mutate } = useJokes(page);

  return (
    <RequestStates loading={loading} error={error} onRetry={() => mutate(null)}>
      <JokesList jokes={jokes} dividers />
      {isLast && (
        <Box display="flex" justifyContent="center" pt={2}>
          <PinkButton
            text={'Зареди още'}
            onClick={() => setPages(page + 1)}
          />
        </Box>
      )}
    </RequestStates>
  );
}

// export default JokesPage;
export default React.memo(Page);
