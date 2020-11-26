// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  listStyles: {
    display: 'flex',
    marginBottom: '50px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '&::after': {
      position: 'absolute',
      content: '""',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '1px',
      height: '100%',
      backgroundColor: '#22335c',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '& li': {
      flex: '0 0 47%',
      paddingTop: '25px',
      paddingRight: '0',
      paddingBottom: '25px',
      paddingLeft: '0',
      borderBottom: '1px solid #22335c',
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        flex: '0 0 100%',
      },
      '& .MuiListItemText-primary': {
        marginBottom: '20px',
        fontWeight: '600'
      },
    }
  }
}));

export default function Page({dividers = false, jokes}) {
  const classes = useStyles();

  return (
    <List disablePadding className={dividers ? classes.listStyles : ''}>
      {jokes.map(({title, content}, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText
              primary={title}
              secondary={content.map((line, index) => (
                <Typography
                  key={index}
                  variant="caption"
                  gutterBottom
                >
                  {line}
                </Typography>
              ))}
              secondaryTypographyProps={{component: 'div'}}
            />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
}
