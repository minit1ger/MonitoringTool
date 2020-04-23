import React from 'react'; 
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core';

import ServerFailureSummary from './ServerFailureSummary';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  divider: {
    margin: theme.spacing(1,0),
    height: "3px", 
    backgroundColor: theme.palette.primary.dark
  }
}));

const ServerHealth = () => {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={6}><ServerFailureSummary /></Grid>
      </Grid>
    </div>
  )
}

export default ServerHealth;