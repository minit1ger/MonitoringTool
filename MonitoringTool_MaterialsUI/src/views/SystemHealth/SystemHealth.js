import React from 'react'; 
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const SystemHealth = () => {
  const classes = useStyles(); 

  return (
    <div>
      SystemHealth
    </div>
  )
}

export default SystemHealth;