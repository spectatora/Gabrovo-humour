// React import can be skipped in the future react versions.
import React from 'react';
import catImageTop from '../assets/cat-top.svg';
import catImageMiddle from '../assets/cat-middle.svg';
import catImageBottom from '../assets/cat-bottom.svg';
// Material UI imports
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  content: {
    paddingTop: 0,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-1px',
    marginBottom: '-1px',
    '& .MuiListItem-root': {
      paddingLeft: '100px',
    },
  },
  header: {
    height: '240px',
    backgroundImage: `url('${catImageTop}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 100%',
    backgroundSize: '100%',
  },
  middle: {
    backgroundImage: `url('${catImageMiddle}')`,
    backgroundRepeat: 'repeat-y',
    backgroundSize: '100%',
  },
  footer: {
    height: '146px',
    backgroundImage: `url('${catImageBottom}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  },
  title: {
    justifyContent: 'flex-end',
  }
});

export default function HomeCard({title, headAction, content, contentProps, actions = null}) {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.card}>
      <div className={classes.header}/>
      <div className={classes.middle}>
        <CardHeader
          title={title}
          action={headAction}
          className={classes.title}
        />
        <CardContent className={classes.content} {...contentProps}>
          {content}
        </CardContent>
        {actions && <CardActions>{actions}</CardActions>}
      </div>
      <div className={classes.footer}/>
    </Card>
  );
}
