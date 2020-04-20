import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import data from "../data/systemHealthOverview.json"

class SystemHealthOverview extends Component {
 
  render(){
    return(
      <div>
        <table>
          <tr>
            <td>System Status:</td>
            <td>Green</td>
          </tr>
          <tr>
            <td>SW Status:</td>
            <td>Green</td>
          </tr> 
        </table>
      </div>
    );
  }
}

export default SystemHealthOverview;