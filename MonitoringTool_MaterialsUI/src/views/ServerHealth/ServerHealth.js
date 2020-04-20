import React from 'react'; 
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const ServerHealth = () => {
  const classes = useStyles(); 

  return (
    <div>
      ServerHealth
    </div>
  )
}

export default ServerHealth;