import React from 'react'; 
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const PDRStatus = () => {
  const classes = useStyles(); 

  return (
    <div>
      PDRStatus
    </div>
  )
}

export default PDRStatus;