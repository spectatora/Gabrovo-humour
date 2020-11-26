import palette from './palette';

export default {
  fontFamily: 'Open Sans',
  fontSize: 16,
  h1: {
    zIndex: '10',
    position: 'relative',
    color: palette.text.primary,
    fontWeight: 700,
    fontSize: '78px',
    lineHeight: '1.2',
    letterSpacing: '-3px',
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '1.2',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 700,
    fontSize: '69px',
    lineHeight: '1.2',
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '1.2',
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '1.2',
    textAlign: 'right',
  },
  h6: {
    position: 'relative',
    marginBottom: '100px',
    color: palette.secondary.main,
    fontWeight: 300,
    fontSize: '24px',
    lineHeight: '1.2',
    '&::after': {
      position: 'absolute',
      left: '0px',
      bottom: '-10px',
      display: 'block',
      content: '""',
      width: '60px',
      height: '4px',
      backgroundColor: palette.secondary.main,
    }
  },
  subtitle1: {
    color: palette.subtitle.default,
    fontSize: '22px',
    fontWeight: '300',
    lineHeight: '1.5',
    letterSpacing: '0.09px',
  },
  subtitle2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '0.07px',
    lineHeight: '20px',
  },
  body1: {
    display: 'block',
    color: palette.subtitle.default,
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '1.2',
  },
  body2: {
    color: palette.subtitle.default,
    fontSize: '22px',
    fontWeight: '300',
    letterSpacing: '0.1px',
    lineHeight: '1.43',
  },
  button: {
    color: palette.text.primary,
    fontSize: '15px',
    letterSpacing: '0.3px',
    lineHeight: '1.73',
  },
  caption: {
    display: 'block',
    color: palette.subtitle.default,
    fontSize: '16px',
    fontWeight: 300,
    letterSpacing: '0.09px',
    lineHeight: '1.5',
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
  },
  textLabel: {
    color: palette.text.primary,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.83px',
    lineHeight: '2.58px',
    textTransform: 'uppercase',
  },

  textSecondary: {
    color: palette.label.default,
    fontSize: '16px',
    fontWeight: 300,
    letterSpacing: '0.09px',
    lineHeight: '1.5',
  },
};
