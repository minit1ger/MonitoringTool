import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsSystemDaydream from '@material-ui/icons/SettingsSystemDaydream';
import Computer from '@material-ui/icons/Computer';
import Email from '@material-ui/icons/Email';
import Waves from '@material-ui/icons/Waves';


import SidebarNav from './SidebarNav';


const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

/**
 * Displays the side bar for all pages.
 * @param {*} props 
 */
const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'SystemHealth',
      href: '/systemhealth',
      icon: <SettingsSystemDaydream /> 
    },
    {
      title: 'ServerHealth',
      href: '/serverhealth',
      icon: <Computer /> 
    },
    {
      title: 'PDRStatus',
      href: '/pdrstatus',
      icon: <Email />
    },
    {
      title: 'XMidas',
      href: '/xmidas',
      icon: <Waves />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
{ /* <Profile /> 
        <Divider className={classes.divider} />*/}
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
{ /* <UpgradePlan /> */}
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
