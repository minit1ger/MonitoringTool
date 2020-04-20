import React, {Component} from "react"; 
import data from '../data/serverStates.json';

class ServerFaultSummary extends Component {

  render() {

     // Map the data from json
    if (data)
    { 
       // Filter the data for hwStatus of RED. 
       // Then return formatted data. 
       const serverArray = data.filter( ( data) => {
         return data.hwStatus === "RED"
       }).map( ( data) => {
          return <tr key={data.name}>
            <td>{data.name}</td>
            <td>{data.hwStatus}</td>
            <td>{data.swStatus}</td>
            </tr>; 
       });

      //Returns 2 columns with Server information
      return (
        <div>
          <table>
            <tbody>
              <tr>
                  <th>Server Name</th>
                  <th>HW Status</th>
                  <th>SW Status</th>
              </tr> 
                  {serverArray}
              </tbody>
          </table>
        </div>
      );
    } else {
      return (<div> din else {this.state.serverProblems} </div>);
    } 
  }
}

export default ServerFaultSummary;
