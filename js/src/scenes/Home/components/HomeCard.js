// React import can be skipped in the future react versions.
import React from 'react';
// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'transparent',
    boxShadow:'none',
    '& .MuiCardHeader-root':{
      paddingLeft:'0',
      '& span':{
        textAlign:'left',
        fontSize:'25px'
      }
    }
  },
  content: {
    padding: 0,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomeCard({ title, headAction, content, contentProps, actions = null }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        action={headAction}
      />
      <CardContent className={classes.content} {...contentProps}>
        {content}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
}
