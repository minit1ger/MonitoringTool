import React, { Component } from "react"; 
import data from "../data/systemOverview.json";

/**
 * Reads from a json file that contains
 *   name, systemOverview, recentFailures
 * 
 *  returns a table with:
 *   name, systemOverview, recentFailures
 * 
 */
class SystemOverview extends Component {

  render() {

    if (data)
    {
      // Creates a table with System Overview. 
      // Will label bad systems as RED. 
      const systemArray = data.map( ( data) => {

        if ( data.systemOverview === "Bad"){
          console.log( "Bad" );

          return <tr key={data.name}>
            <td>{data.name}</td>
            <td><font color="red">{data.systemOverview}</font></td>
            <td>{data.recentFailures}</td>
          </tr>
        } else {
 
          return <tr key={data.name}>
            <td>{data.name}</td>
            <td>{data.systemOverview}</td>
            <td>{data.recentFailures}</td>
          </tr>
        }
      });

      return (
        <div>
          <table>
            <tbody>
              <tr>
                <th>System Name </th>
                <th> System Overview </th>
                <th> Recent Failures </th>
              </tr>
                {systemArray}
            </tbody>
          </table>
        </div>
      );

    } else {
      return (<div> Could not Load SystemOverview </div>)
    }
  }
}

export default SystemOverview;