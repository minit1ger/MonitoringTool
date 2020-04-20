import React, {Component} from "react"; 
import data from '../data/serverStates.json';


class ServerHealthDisplay extends Component {


  constructor(){
    super(); 
    this.state = {
      serverHealth: null,
      serverName: "G2CMS01B"
    }
  }

  render(){

    // TODO: Create an iterator to go through Keys and value pairs. 
    // That would be a useful utility. 
    if (data)
    {
      console.log("Server Name: " + this.props.serverName )
      var server = data.filter( ( data) => {
        return data.name === this.props.serverName; 
      }).map( (data, index) => {
        console.log("ServerHealthDisplay: " + data);
        return <tbody key="serverHealth">
          <tr><th colSpan="2">{data.name}</th></tr>
          <tr key={data.hwStatus}>
            <td>Hardware Status:</td>
            <td>{data.hwStatus}</td>
          </tr>
          <tr key={data.swStatus}>
            <td>SW Status:</td>
            <td>{data.swStatus}</td>
          </tr>
          <tr key={data.iloStatus}>
            <td>Ilo Status:</td>
            <td>{data.iloStatus}</td>
          </tr>
          <tr key={data.fanStatus}>
            <td>Fan Status:</td>
            <td>{data.fanStatus}</td>
          </tr>  
        </tbody>
      });

      if (server.length !== 0){
        return (
          <div className="serverHealthDisplay">
            <table>
              {server}
            </table>
          </div>
        );
      } else {
        return (
          <div> Could not find Server Data for {this.props.serverName}</div>
        );
      }
    } else {
      return ( <div> Could not load Server Health Data. </div>);
    }
    
  }
}

export default ServerHealthDisplay;