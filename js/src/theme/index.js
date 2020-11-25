import { createMuiTheme } from '@material-ui/core';
//
import palette from './palette';
import typography from './typography';
import overrides from './overrides';
//
const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  MuiTypography: {
    textSecondary: {
      color: palette.label.default,
      fontSize: '16px',
      fontWeight: 300,
      letterSpacing: '0.09px',
      lineHeight: '1.5',
    },
  },
});

export default theme;
