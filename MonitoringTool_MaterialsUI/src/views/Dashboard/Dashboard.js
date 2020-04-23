import React from 'react'; 
import { makeStyles } from '@material-ui/styles'
import { 
  Grid,
  Card,
  CardHeader
} from '@material-ui/core';

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

        <Grid item xs={12}>
        <Grid item xs={12}> <Divider className={classes.divider}/> </Grid>
        
        <Card >
        <CardHeader title="Site Information" align="center"/>
          <Grid container spacing={3}>

          {/* Display site events */}
          <Grid item xs={3}><SiteEvents systemName="Texas-A" /></Grid>

          <Grid item xs={3}><SiteEvents systemName="Texas-Z" /></Grid>

          <Grid item xs={3}><SiteEvents systemName="Ohio-A" /></Grid>

          <Grid item xs={3}><SiteEvents systemName="Ohio-Z" /></Grid>

          <Grid item xs={3}><SiteEvents systemName="Massachusetts-A" /></Grid>

          <Grid item xs={3}><SiteEvents systemName="Massachusetts-Z" /></Grid>
          </Grid>
        </Card>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Dashboard;