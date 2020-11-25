import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const magenta = '#fd1d62';
const blue = '#19294e';

export default {
  action: {
    // disabledBackground: 'red',
    disabled: white,
  },
  black,
  white,
  primary: {
    contrastText: white,
    main: blue,
  },
  secondary: {
    contrastText: white,
    main: magenta,
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: '#A4C300',
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: '#40C8F4',
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: '#ffaa70',
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: '#A5082D',
    light: colors.red[400],
  },
  text: {
    primary: white,
    secondary: colors.blueGrey[600],
    link: blue,
  },
  background: {
    default: blue,
    paper: white,
  },
  label: {
    default: white,
  },
  subtitle: {
    default: white,
  },

  icon: white,
  divider: '#22335c',
};
