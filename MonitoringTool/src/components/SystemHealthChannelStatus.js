import React, { Component } from 'react'; 
import { sizing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper';

class SystemHealthChannelStatus extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={8} spacing={3}>
            <Paper elevation={1} width={1/4}>1</Paper>
            <Paper>2</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SystemHealthChannelStatus;