import React from 'react'; 
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core';

import SystemOverview from './SystemOverview';
import SiteEvents from './SiteEvents'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SystemOverview />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SiteEvents systemName="Texas-A" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SiteEvents systemName="Texas-Z" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SiteEvents systemName="Ohio-A" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SiteEvents systemName="Ohio-Z" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SiteEvents systemName="Massachusetts-A" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SiteEvents systemName="Massachusetts-Z" />
        </Grid> 

      </Grid>
      
    </div>
  )
}

export default Dashboard;