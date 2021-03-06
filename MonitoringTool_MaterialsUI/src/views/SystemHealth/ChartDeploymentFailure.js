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


export const deploymentFailure = {
  labels: getDates(),
  datasets: [
    {
      label: '# of Deployment Failures',
      //backgroundColor: palette.primary.main,
      data: getData( "dFailures")
    }
  ]
};

/**
 * Display Deployment Failures
 * @param {*} props 
 */
const ChartDeploymentFailure = props => {

  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
      <Line 
        data={deploymentFailure} />
    </div>
  );
};

export default ChartDeploymentFailure;