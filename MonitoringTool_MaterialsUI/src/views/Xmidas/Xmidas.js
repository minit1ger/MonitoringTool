import React from 'react'; 
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Xmidas = () => {
  const classes = useStyles(); 

  return (
    <div>
      Xmidas
    </div>
  )
}

export default Xmidas;