import React from 'react'; 
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core';

import SystemOverview from './SystemOverview';
import SiteEvents from './SiteEvents';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  divider: {
    margin: theme.spacing(1, 0),
    height: "3px",
    backgroundColor: theme.palette.primary.dark
  }
}));

const Dashboard = () => {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        {/* Padding to center the Overview */}
        <Grid item xs={3}></Grid>

        {/* System Overview */}
        <Grid item xs={6}><SystemOverview /></Grid>

        {/* Padding to center the Overview */}
        <Grid item xs={3}></Grid>

        <Grid item xs={12}> <Divider className={classes.divider}/> </Grid>

        {/* Display site events */}
        <Grid item xs={3}><SiteEvents systemName="Texas-A" /></Grid>

        <Grid item xs={3}><SiteEvents systemName="Texas-Z" /></Grid>

        <Grid item xs={3}><SiteEvents systemName="Ohio-A" /></Grid>

        <Grid item xs={3}><SiteEvents systemName="Ohio-Z" /></Grid>

        <Grid item xs={3}><SiteEvents systemName="Massachusetts-A" /></Grid>

        <Grid item xs={3}><SiteEvents systemName="Massachusetts-Z" /></Grid>

      </Grid>
      
    </div>
  )
}

export default Dashboard;