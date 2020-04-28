
import data from '../../data/deploymentNumber.json'

export function getDates(){
  if ( data ){
    var dates = [];
    for ( var n in data )
    {
      dates.push(data[n].Date);
      console.log( "data: " + data[n].Date);
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