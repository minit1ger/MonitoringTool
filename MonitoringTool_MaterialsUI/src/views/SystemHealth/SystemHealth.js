import React from 'react'; 
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core';

import ChartDeploymentNumber from './ChartDeploymentNumber';
import ChartServerFailure from './ChartServerFailure';
import ChartPDRNumbers from './ChartPDRNumbers';
import ChartDeploymentFailure from './ChartDeploymentFailure';
import SystemHealthOverview from './SystemHealthOverview';
import ServerLogs from './ServerLog'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const SystemHealth = () => {
  const classes = useStyles(); 

  return (
    <div classes={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}><SystemHealthOverview /></Grid>
        <Grid item xs={6}><ServerLogs /></Grid>
        <Grid item xs={6}><ChartDeploymentNumber /></Grid>
        
        <Grid item xs={6}><ChartPDRNumbers /></Grid>
        <Grid item xs={6}><ChartServerFailure /></Grid>
        <Grid item xs={6}><ChartDeploymentFailure /></Grid>
      </Grid>
    
    </div>
  )
}

export default SystemHealth;