import React, { Component } from "react";
import data from "../data/sanStatus.json";

class SanStatus extends Component{
  
  render( )
  {
    if (data)
    {
      var returnString=[]; 
      for (var key in data)
      {
        returnString.push(<tr key={key}>
          <td>{key}</td>
          <td>{data[key]}</td>
        </tr>);
      }
      
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <th colSpan="2">San Status</th>
              </tr>
                {returnString}
            </tbody>
          </table>
        </div>

      )} else {
        
      return (
        <div> No San Status.</div> 
      ); 
    }
  }
}

export default SanStatus;