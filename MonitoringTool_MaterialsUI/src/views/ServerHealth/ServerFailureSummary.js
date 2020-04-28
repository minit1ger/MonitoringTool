import React from 'react'; 
import clsx from 'clsx';

// Stylization Related Imports
import { makeStyles, colors, Typography } from '@material-ui/styles';

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
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';


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
  content: {
    padding: 0,
    marginBottom: 0
  },
}));

const ServerFailureSummary = props => {
  const { className, ...rest } = props; 

  const classes = useStyles(); 

  // Map the Server Data from Json File
  if (data)
  {
    // Filter the data for hwStatus of RED. 
    // Then return ROW formatted data. 
    const serverArray = data.filter( ( data) => {
      return data.hwStatus === "RED"
    }).map( ( data) => {
      return <TableRow key={data.name}>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.hwStatus}</TableCell>
        <TableCell>{data.swStatus}</TableCell>
      </TableRow>;
    });
    
    // Returns 2 columns with Server information
    return(
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader title="Server Failure Summary" />
        <Divider />
        <CardContent className={classes.content}>
          <div> 
            <TableContainer>
              <Table>
                <TableHead className={classes.head}>
                  <TableRow>
                    <TableCell>Server Name</TableCell>
                    <TableCell>HW Status</TableCell>
                    <TableCell>SW Status</TableCell>
                    </TableRow>
                  </TableHead>
                <TableBody>
                  { serverArray }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CardContent>
      </Card>
    );
  }
  else
  {
    return (
      <div> ServerFailureSummary Failed to Read Data</div>
    );
  }
}

export default ServerFailureSummary;