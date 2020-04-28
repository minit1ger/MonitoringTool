import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.logo.main,
    padding: theme.spacing(4)
  }, 
  logo: {
    color: theme.palette.logo.main,
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    /* TODO: Warning validateDOMNesting: <p> cannot appear as a descendant of <p>
             Not sure why this is appearing for <div> flag.
    */
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* Display Hello Kitty Logo */}
      <Typography variant="body1">
        &copy;{' '}
        A <Typography className={classes.logo} style={{display: 'inline-block'}}>HelloKitty</Typography> Production
        . 2020
      </Typography>
      <Typography variant="caption">
        Created in fear of catching COVID-19!
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
