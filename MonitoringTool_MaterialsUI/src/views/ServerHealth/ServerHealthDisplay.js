import React from 'react'; 
import clsx from 'clsx'; 

// Stylization Related Imports
import { makeStyles, colors, Typography } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';

import { spacing } from '@material-ui/system'

import { 
  //Table Related Imports
  TableContainer, 
  Table, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell,

  //Card Related Imports
  Card, 
  CardHeader,
  CardContent,

  // Other
  Divider
} from '@material-ui/core';

import data from '../../data/serverStates.json'

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
}));

const ServerHealthDisplay = props => {
  const { className, ...param } = props; 

  const classes = useStyles(); 

  const serverName = param.serverName; 

  if (data)
  {
    console.log("Server Name: " + param.serverName );
    var server = data.filter( ( data) => {
      return data.name === param.serverName; 
    }).map( (data,index) => {
      console.log("ServerHealthDisplay: " + data);
      return <TableBody>
        <TableRow className={classes.row} key={data.name}>
          <TableCell>Server Name: </TableCell>
          <TableCell>{data.name}</TableCell>
        </TableRow>
        <TableRow key={data.hwStatus}>
          <TableCell>Hardware Status:</TableCell>
          <TableCell>{data.hwStatus}</TableCell>
        </TableRow>
        <TableRow className={classes.row} key={data.swStatus}>
            <TableCell>SW Status:</TableCell>
            <TableCell>{data.swStatus}</TableCell>
          </TableRow>
          <TableRow key={data.iloStatus}>
            <TableCell>Ilo Status:</TableCell>
            <TableCell>{data.iloStatus}</TableCell>
          </TableRow>
          <TableRow className={classes.row} key={data.fanStatus}>
            <TableCell>Fan Status:</TableCell>
            <TableCell>{data.fanStatus}</TableCell>
          </TableRow>  
      </TableBody>
    })
    return(

        <CardContent className={classes.content}>
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="Server Health"></Table>

                  {server}

            </TableContainer>
          </div>
        </CardContent>
    );
  }
}

export default ServerHealthDisplay;