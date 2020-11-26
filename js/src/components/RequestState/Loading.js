// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import CircularProgress from '@material-ui/core/CircularProgress';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  icon: {
    color: '#ffffff',
  }
});

export default function Loading() {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" pt={2}>
      <CircularProgress className={classes.icon} />
    </Box>
  );
}
