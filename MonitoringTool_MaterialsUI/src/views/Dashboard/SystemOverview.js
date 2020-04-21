import React          from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes      from 'prop-types';
import Paper          from '@material-ui/core/Paper';
import data           from '../../data/systemOverview.json'

//Table Related Imports
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell} from '@material-ui/core';

import { spacing } from '@material-ui/system';

/**
 * TODO: Could not change the padding OTHER than setting it to NONE.  
 *       Would like to update so that the left most row is indented. 
 * **/ 

/**
 * Name: SystemOverview
 * 
 * Reads from a json file that contains
 *   name, systemOverview, recentFailures
 * 
 *  returns a table with:
 *   name, systemOverview, recentFailures
 * 
 *  Table colors: 
 *    header (table header)
 *    table.rowColor    (even row)
 * 
 */
const useStyles = makeStyles(theme => ({
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
    Provides alternating style for the fow. 
    
    For even row, apply the style. 
    For odd rows, leave as is.
 */ 
function returnRowStyle( index )
{
  const classes = useStyles();
  return  index % 2 ? classes.row : "";
}

/**
 * Name:      SystemOverview
 * Parameter: None 
 * 
 * Container with the System Overview
 */
const SystemOverview = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  
  if (data)
  {
    // Creates a table with System Overview. 
    // Will label bad systems as RED. 
    const systemArray = data.map( ( data, index) => {

      if ( data.systemOverview === "Bad"){
        console.log( "Bad" );

        return <TableRow className={returnRowStyle( index )} key={data.name}>
          <TableCell component="th" scope="row">{data.name}</TableCell>
          <TableCell><font color="red">{data.systemOverview}</font></TableCell>
          <TableCell>{data.recentFailures}</TableCell>
        </TableRow>
      } else {

        return <TableRow className={returnRowStyle( index )} key={data.name}>
          <TableCell>{data.name}</TableCell>
          <TableCell>{data.systemOverview}</TableCell>
          <TableCell>{data.recentFailures}</TableCell>
        </TableRow>
      }
    });

    /** Returns  */
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" padding="none" aria-label="simple table">
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell> System Name </TableCell>
              <TableCell> System Overview </TableCell>
              <TableCell> Recent Failures </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { systemArray }
          </TableBody>
        </Table>
      </TableContainer>
    );
  
  // If data could not be processed, return Error. 
  } else {
    return ( 
      <div> ERROR: Container (SystemOverview) Could not read Data.</div> 
    );
  }
};

export default SystemOverview;