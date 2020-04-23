import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, colors} from '@material-ui/core'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import data from '../../data/systemOverview.json'

import dataArray from "../../data/siteEvent.json";


//Table Related Imports
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell} from '@material-ui/core';
import { fontSize } from '@material-ui/system';

/**
 * TODO: for table related styles and methods, maybe look into 
 * extracting this into a Utility ... ?
 */
const useStyles = makeStyles( theme => ({

   table: {
      minWidth: 150,
   },
   head: {
     backgroundColor: theme.palette.table.header,
     fontWeight: theme.typography.fontWeightBold,
     fontSize: '16px'
   },
   row: {
     backgroundColor: theme.palette.table.rowColor
   },
   cell: {
      color: colors.blueGrey[800],
      padding: '0px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      fontWeight: theme.typography.fontWeightMedium
   },
   container: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
   }
}));

/**
 * Returns the header 
 * @param {*} locationData 
 */
function createHeader( locationData ) {
    const classes = useStyles();
    //  return <TableHead className={classes.head} scope="row" rowSpan={locationData[0].events.length + 2}>
  return <TableHead className={classes.head}>
    <TableCell className={classes.head} colSpan={3} align="center">
      <Typography className={classes.head}>
        {locationData[0].name}
      </Typography>
    </TableCell>
  </TableHead>
}

function createRows( locationData ){
    const classes = useStyles();

    if ( locationData[0].events.length !== 0 )
    {
      return locationData[0].events.map( ( data, index) => {
        return <TableRow className={returnRowStyle( index )} key={index}>
          <TableCell><Typography className={classes.cell}>{data.date}</Typography></TableCell>
          <TableCell><Typography className={classes.cell}>{data.resolved.toString()}</Typography></TableCell>
          <TableCell><Typography className={classes.cell}>{data.event}</Typography></TableCell>
        </TableRow>
      });
    } else {
      return <TableRow>
        <TableCell></TableCell>
        <TableCell colSpan="3">
          <Typography className={classes.cell}> 
            {locationData[0].name} has no recent Events. 
          </Typography>
        </TableCell>
      </TableRow>
    }
}

function returnRowStyle( index )
{
  const classes = useStyles();
  return  index % 2 ? classes.row : "";
}

const SiteEvents = props => {
  const { className, ...rest } = props;

  const classes = useStyles(); 

  const locationData = dataArray.filter( ( data) => {
    return data.name === rest.systemName;
  });

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} padding="none">
          {createHeader(locationData)}
          <TableBody>
            {createRows(locationData)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default SiteEvents; 