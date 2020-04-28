import React from 'react'; 

// Stylization Related Imports
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import data from '../../data/systemHealthOverview.json'

import Paper from '@material-ui/core/Paper';

import ChannelOverview from './ChannelOverview';

import { 
  //Table Related Imports
  TableContainer, 
  Table, 
  TableBody, 
  TableRow, 
  TableCell,

  CardHeader,
  CardContent} from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  table: {
    minWidth: 150,
  },
  head: {
    backgroundColor: theme.palette.table.header,
    fontWeight: theme.typography.fontWeightBold,
    fontsize: '16px',
    padding: '4px 8px',
  }, 
  row: {
    backgroundColor: theme.palette.table.rowColor
  },
  content: {
    padding: 0,
    marginBottom: 0
  },
  greenText: {
    color: theme.palette.success.light,
    fontWeight: theme.typography.fontWeightBold
  },
  redText: {
    color: theme.palette.error.light,
    fontWeight: theme.typography.fontWeightBold
  }
}));

function returnHealthColor( greenRed ) {

  const classes = useStyles();
  
  if ( greenRed === "Green")
  {
    return classes.greenText;
  }
  else if ( greenRed === "Red")
  {
    return classes.redText;
  }
}

const SystemHealthOverview = () => {
  const classes = useStyles();

  if (data){
      console.log("Data systemStatus: " + data.systemStatus);
      console.log("Data swStatus: " + data.swStatus);
  
    return(
      <CardContent className={classes.content}>
        <CardHeader title="System Health Overview" />
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="System Health Overview">
              <TableBody>
                <TableRow className={classes.row} key={data.systemStatus}>
                  <TableCell>System Status:</TableCell>
                  <TableCell><Typography className={returnHealthColor(data.systemStatus)}>{data.systemStatus}</Typography></TableCell>
                </TableRow>
                <TableRow className={classes.row} key={data.swStatus}>
                  <TableCell>Software Status</TableCell>
                  <TableCell><Typography className={returnHealthColor(data.swStatus)}>{data.swStatus}</Typography></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <ChannelOverview />
      </CardContent>

    );
  }
}

export default SystemHealthOverview;