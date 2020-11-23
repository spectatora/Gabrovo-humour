// React import can be skipped in the future react versions.
import React from 'react';
import { Link } from 'react-router-dom';
// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
// Application imports
import { useJokes } from '../data/api';

const useStyles = makeStyles((theme) => ({
  homeLink: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  container: {
    flexGrow: 1,
    display: 'flex',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const { total } = useJokes();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="Home"
            component={Link}
            to="/"
            className={classes.homeLink}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MAD - Gabrovo
          </Typography>
          {Boolean(total) && <Chip label={`общо ${total} шеги`} />}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container className={classes.container}>
        <Grid container justify="center" alignItems="center">
          <Grid item>{children}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}
