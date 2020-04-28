import React          from 'react';
import { makeStyles } from '@material-ui/styles'
import { Grid, Box } from '@material-ui/core';

import data from '../../data/systemHealthOverview.json';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  chartContainer: {
    height: 400,
    position: 'relative',
  },
  spacing: {
    height: 20
  },
  channelBox: {
     padding: "25px 0",
     borderRadius: "10%",
     textAlign: "center",
     boxShadow: "4px 4px 6px 1px rgba(0, 0, 255, .2)"
  },
  idleBox: {
     border: "1px solid green",
     backgroundColor: theme.palette.success.light,
     padding: "25px 0",
     borderRadius: "10%",
     textAlign: "center",
     boxShadow: "4px 4px 6px 1px rgba(0, 0, 255, .2)",
     fontSize: "1.2em",
  },
  busyBox: {
     border: "1px solid green",
     backgroundColor: theme.palette.success.main,
     padding: "25px 0",
     borderRadius: "10%",
     textAlign: "center",
     boxShadow: "4px 4px 6px 1px rgba(0, 0, 255, .2)",
     fontWeight: "900",
     fontSize: "1.2em"
  },
  failedBox: {
     border: "1px solid green",
     backgroundColor: theme.palette.error.light,
     padding: "25px 0",
     borderRadius: "10%",
     textAlign: "center",
     boxShadow: "4px 4px 6px 1px rgba(0, 0, 255, .2)",
     fontSize: "1.2em"
  },
  offBox: {
     border: "1px solid green",
     backgroundColor: theme.palette.offline.light,
     padding: "25px 0",
     borderRadius: "10%",
     textAlign: "center",
     boxShadow: "4px 4px 6px 1px rgba(0, 0, 255, .2)",
     fontSize: "1.2em"
  }

}));

const ChannelOverview = () => {
  const classes = useStyles();

  if ( data ){

    console.log("data@:" + data.channelStatus);

    const channels = data.channelStatus.map( (channelState, index) => {
      if ( channelState === "BUSY" )
      {
        return <Grid item xs={3}><Box class={classes.busyBox}>{index + 1}</Box></Grid>
      } else if ( channelState === "IDLE" ) {
        return <Grid item xs={3}><Box class={classes.idleBox}>{index + 1}</Box></Grid>
      } else if ( channelState === "FAILED" ) {
        return <Grid item xs={3}><Box class={classes.failedBox}>{index + 1}</Box></Grid>
      } else if ( channelState === "OFFLINE") {
        return <Grid item xs={3}><Box class={classes.offBox}>{index + 1}</Box></Grid>
      }
    });
   
    return (
      <div>
        <div class={classes.spacing}></div>
        <Grid justify="center" container spacing={4}>
          {channels}
        </Grid>
      </div>
    );
  }
}

export default ChannelOverview;