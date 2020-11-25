// React import can be skipped in the future react versions.
import React from 'react';
import { Link } from 'react-router-dom';
// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Should always be last from material imports
import Box from '@material-ui/core/Box';
// Application imports
import { useJokes } from '../data/api';

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.primary.main,
  },
  header: {
    boxShadow: 'none',
  },
  homeLink: {
    marginRight: theme.spacing(2),
    color: 'white',
    textTransform: 'none',
    fontWeight: '700',
    textDecoration: 'underline',
  },
  title: { flexGrow: 1 },
  container: {
    maxWidth: '1560px',
    flexGrow: 1,
    display: 'flex',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  navWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const { total } = useJokes();

  return (
    <Box className={classes.main} display="flex" flexDirection="column" minHeight="100vh">
      <AppBar className={classes.header} position="fixed">
        <Toolbar className={classes.navWrapper}>
          <Button
            edge="start"
            aria-label="Home"
            component={Link}
            to="/"
            className={classes.homeLink}
          >
            Начало
          </Button>

          {Boolean(total) && <Typography variant="caption">общо {total} шеги</Typography>}
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
