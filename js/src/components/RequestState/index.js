// React import can be skipped in the future react versions.
import React from 'react';
// Application imports
import Loading from './Loading';
import Error from './Error';

export default function RequestStates({ loading, error, onRetry, children }) {
  // render loading state
  if (loading) {
    return <Loading />;
  }

  // render error state
  if (error) {
    return <Error onRetry={onRetry} />;
  }

  return children;
}
