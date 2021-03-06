import React from 'react';

//import palette from 'theme/palette'; 

import { makeStyles } from '@material-ui/styles';
import { Line } from 'react-chartjs-2';

import { getDates, getData, chartOptions } from './getChartInformation';

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


export const deploymentData = {
  labels: getDates(),
  datasets: [
    {
      label: '# of Deployments',
      //backgroundColor: palette.primary.main,
      data: getData( "Deployments")
    }
  ]
};

const ChartDeploymentNumbers = props => {

  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
      <Line 
        data={deploymentData} 
        options={chartOptions} />
    </div>
  );
};

export default ChartDeploymentNumbers;