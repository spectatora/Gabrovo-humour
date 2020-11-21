// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import CircularProgress from '@material-ui/core/CircularProgress';
// Should always be last from material imports
import Box from '@material-ui/core/Box';

export default function Loading() {
  return (
    <Box display="flex" justifyContent="center" pt={2}>
      <CircularProgress />
    </Box>
  );
}
