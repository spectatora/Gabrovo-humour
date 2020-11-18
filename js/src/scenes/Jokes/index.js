// React import can be skipped in the future react versions.
import React, { useState } from 'react';
// Application imports
import Page from './components/Page';

export default function Jokes() {
  const [pages, setPages] = useState(1);

  // prepare 1..pages array
  const pagesArray = Array.from({ length: pages }, (v, k) => k + 1);

  return pagesArray.map((page) => (
    <Page
      key={page}
      page={page}
      setPages={setPages}
      isLast={pagesArray.length === page}
    />
  ));
}
