import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import btnBg from '../assets/button.svg';

const useStyles = makeStyles((theme) => ({
  bigPink: {
    width: '200px',
    padding: '25px',
    backgroundImage: `url('${btnBg}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 100%',
    backgroundSize: '100%',
    '& span': {
      textDecoration: 'none',
    }
  }
}))


function PinkButton({to, component, onClick, text}) {
  const classes = useStyles();

  return (
    <Button
      className={classes.bigPink}
      onClick={onClick}
      to={to}
      component={component}
    >
      {text}
    </Button>
  )
}

export default PinkButton;
