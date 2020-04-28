import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const ghostWhite = '#FAF8FF';
const black = '#000000';

/*
  Color Information can be found in https://www.materialui.co/colors;
*/ 
export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
    pale: colors.red[50]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  offline: {
    contrastText: white, 
    dark: colors.blueGrey[700],
    main: colors.blueGrey[300],
    light: colors.blueGrey[100]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    //default: '#F4F6F8',
    default: ghostWhite,
    paper: white
  },
  logo: {
    main: colors.pink[400]
  },
  table: {
    header:   colors.grey[200],
    rowColor: colors.grey[100]
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],

};
