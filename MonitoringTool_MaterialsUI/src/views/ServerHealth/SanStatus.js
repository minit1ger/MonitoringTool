import React from "react"; 

import data from "../../data/sanStatus.json";

import Paper          from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { colors, Card, Typography } from '@material-ui/core';

import {
  TableContainer, 
  Table,
  TableBody,
  TableRow,
  TableCell,

  CardHeader,
  CardContent,
  Divider
} from '@material-ui/core'

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
 * SanStatus returns a table of SAN information.
 * @param {*} props 
 */
const SanStatus = props => {
  const { className, ...rest } = props; 

  const classes = useStyles(); 

  if (data)
  {
    var returnString=[]; 
    var i=0;
    for ( var key in data )
    {
      returnString.push(
        <TableRow className={returnRowStyle( i )} key={key}>
          <TableCell><Typography className={classes.cell}>{key}</Typography></TableCell>
          <TableCell><Typography className={classes.cell}>{data[key]}</Typography></TableCell>
        </TableRow>
      );
      
      i++;
    }

    return (
      <Card {...rest} className={classes.container} >
        <CardHeader align="center" title="SanStatus" />
        <Divider />
        <CardContent className={classes.content}>
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="simple table">
                <TableBody>
                  {returnString}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default SanStatus;