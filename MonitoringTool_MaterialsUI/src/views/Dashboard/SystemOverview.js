import React          from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes      from 'prop-types';
import Paper          from '@material-ui/core/Paper';
import { Typography, colors, Card } from '@material-ui/core';
import data           from '../../data/systemOverview.json'

//Table Related Imports
import { 
  TableContainer, 
  Table, 
  TableBody, 
  TableHead,
  TableRow, 
  TableCell,

  CardHeader,
  CardContent,
  Divider
} from '@material-ui/core';

import { spacing } from '@material-ui/system';
import clsx from 'clsx';

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
    backgroundColor: theme.palette.table.header,
    fontWeight: theme.typography.fontWeightBold,
    fontsize: '16px',
    padding: '4px 8px',
  }, 
  row: {
    backgroundColor: theme.palette.table.rowColor
  },
  content: {
    padding: 0
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
          <TableCell component="th" scope="row"><Typography className={classes.cell}>{data.name}</Typography></TableCell>
          <TableCell><Typography className={classes.cell}><font color="red">{data.systemOverview}</font></Typography></TableCell>
          <TableCell><Typography className={classes.cell}>{data.recentFailures}</Typography></TableCell>
        </TableRow>
      } else {

        return <TableRow className={returnRowStyle( index )} key={data.name}>
          <TableCell><Typography className={classes.cell}>{data.name}</Typography></TableCell>
          <TableCell><Typography className={classes.cell}>{data.systemOverview}</Typography></TableCell>
          <TableCell><Typography className={classes.cell}>{data.recentFailures}</Typography></TableCell>
        </TableRow>
      }
    });

    /** Returns  */
    return (
      <Card 
        {...rest}
        className={classes.container}
      >
        <CardHeader align="center"
          title="System Overview"
        />
        <Divider />
          <CardContent className={classes.content}>
            <div >
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" padding="none" aria-label="simple table">
                  <TableHead className={classes.head}>
                    <TableRow>
                      <TableCell><Typography className={classes.head}> System Name </Typography></TableCell>
                      <TableCell><Typography className={classes.head}> System Overview </Typography></TableCell>
                      <TableCell><Typography className={classes.head}> Recent Failures </Typography></TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { systemArray }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardContent>
      </Card>
    );
  
  // If data could not be processed, return Error. 
  } else {
    return ( 
      <div> ERROR: Container (SystemOverview) Could not read Data.</div> 
    );
  }
};

export default SystemOverview;