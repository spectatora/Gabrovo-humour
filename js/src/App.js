// React import can be skipped in the future react versions.
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import * as api from './data/api';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    api.getJokes().then((response) => setJokes(response));
  }, []);

  return (
    <Container>
      <List>
        {jokes.map(({ title, content }, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={title}
              secondary={content.map((line, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                >
                  {line}
                </Typography>
              ))}
              secondaryTypographyProps={{ component: 'div' }}
              // secondaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
