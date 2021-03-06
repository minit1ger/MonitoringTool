import React from 'react';

//import palette from 'theme/palette'; 

import { makeStyles } from '@material-ui/styles';
import { Line } from 'react-chartjs-2';

import { getDates, getData } from './getChartInformation';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400, 
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));


export const PDRs = {
  labels: getDates(),
  datasets: [
    {
      label: '# of PDRs',
      //backgroundColor: palette.primary.main,
      data: getData( "PDRs")
    }
  ]
};

const ChartPDRNumber = props => {

  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
      <Line 
        data={PDRs} />
    </div>
  );
};

export default ChartPDRNumber;