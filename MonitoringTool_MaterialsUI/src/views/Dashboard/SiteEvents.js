import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import data from '../../data/systemOverview.json'

import dataArray from "../../data/siteEvent.json";


//Table Related Imports
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell} from '@material-ui/core';

/**
 * TODO: for table related styles and methods, maybe look into 
 * extracting this into a Utility ... ?
 */
const useStyles = makeStyles( theme => ({

   table: {
      minWidth: 150,
   },
   head: {
     backgroundColor: theme.palette.table.header
   },
   row: {
     backgroundColor: theme.palette.table.rowColor
   }
}));

/**
 * Returns the header 
 * @param {*} locationData 
 */
function createHeader( locationData ) {
  return <TableHead className={useStyles.head} scope="row" rowSpan={locationData[0].events.length + 2}>
    {locationData[0].name}
  </TableHead>
}

function createRows( locationData ){

    if ( locationData[0].events.length !== 0 )
    {
      return locationData[0].events.map( ( data, index) => {
        return <TableRow key={index}>
          <TableCell>{data.date}</TableCell>
          <TableCell>{data.resolved.toString()}</TableCell>
          <TableCell>{data.event}</TableCell>
        </TableRow>
      });
    } else {
      return <TableRow> 
        <TableCell></TableCell>
        <TableCell colSpan="3">{locationData[0].name} has no recent Events. </TableCell>
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
    <div>
      <TableContainer component={Paper}>
        <Table>
          {createHeader(locationData)}
          <TableBody>
            {createRows(locationData)}
          </TableBody>
        </Table>
        {console.log("REST: " + rest.systemName )}
      </TableContainer>
    </div>
  );
}


export default SiteEvents; 