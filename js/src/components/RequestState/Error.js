// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import Grid from '@material-ui/core/Grid';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';

export default function Error({ onRetry }) {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ErrorOutlineIcon fontSize="large" />
      </Grid>
      <Grid item>
        <Typography variant="h5" align="center">
          Ops, something went wrong.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={onRetry}
        >
          Retry
        </Button>
      </Grid>
    </Grid>
  );
}
