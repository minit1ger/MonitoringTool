import React, { Component } from "react";
import dataArray from "../data/systemEvents.json";


class SystemEvents extends Component {

  /**
   * create Header populates the header with the location name.  
   */
  createHeader( locationData ){

    return <th className="rowHeader" scope="row" rowSpan={locationData[0].events.length + 2}> {locationData[0].name}  </th>;
  }

  createRows( locationData ){

    if ( locationData[0].events.length !== 0 )
    {
      return locationData[0].events.map( ( data, index) => {
        return <tr key={index}>
          <td className="columnDate">{data.date}</td>
          <td className="columnBoolean">{data.resolved.toString()}</td>
          <td>{data.event}</td>
        </tr>
      });
    } else {
      return <tr>
        <td></td>
        <td colSpan="3"> {locationData[0].name} has no recent Events. </td>
      </tr>
    }

  }

  render () {

    const locationData = dataArray.filter( ( data) => {
      return data.name === this.props.systemName;
    });

    if ( locationData.length !== 0 ) {
      console.log("in here");
      return (
        <div className="systemEventsContent">
          <table>
            <tbody>
              <tr>
                {this.createHeader( locationData )}
              </tr>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Resolved?</th>
                <th scope="col">Event</th>
              </tr>
              {this.createRows( locationData )}
            </tbody>
          </table>
        </div> 
      );
    } else {
      return (
        <div className="systemEventsContent"> 
          <table>
            <tbody>
              <tr><th>Warning: Missing {this.props.systemName} data.</th></tr>
            </tbody> 
          </table>
        </div>
      );}
  }
  
}

export default SystemEvents; 