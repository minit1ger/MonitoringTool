
import data from '../../data/deploymentNumber.json'
import palette from '../../theme/palette';

import { colors } from '@material-ui/core';

export function getDates(){
  if ( data ){
    var dates = [];
    for ( var n in data )
    {
      dates.push(data[n].Date);
    }
    return dates;
  }
}

export function getData( key ){
  if ( data ){

    var d = []; 
    for ( var n in data ){
      d.push(data[n][key]);
    }
    return d;
  }
}

export const chartOptions = {
responsive: true,
  maintainAspectRatio: true,
  animation: true,
  legend: { display: true },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.primary.dark,
    backgroundColor: colors.red[900],
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: true,
          drawBorder: true
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          //borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ],
    borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
  }
};