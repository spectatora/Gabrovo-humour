// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default function Page({ jokes, dividers = false }) {
  return (
    <List disablePadding>
      {jokes.map(({ title, content }, index) => (
        <React.Fragment key={index}>
          <ListItem>
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
            />
          </ListItem>
          {dividers && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}
