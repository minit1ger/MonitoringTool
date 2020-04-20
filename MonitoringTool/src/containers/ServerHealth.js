import React, { Component } from "react"; 
import ServerFaultSummary from "../components/ServerFaultSummary";
import ServerHealthDropdown from "../components/ServerHealthDropdown";
import SanStatus from "../components/SanStatus"

class ServerHealth extends Component {

  componentDidMount() {
    document.title = 'Monitor Tool: Server Health';
  }

  // TODO: Update Display layout so that Server Health Display has columns. 
  render() {
    return (
      <div>
        <h3>Server Failure Summary</h3>
        <hr/>
        <ServerFaultSummary />
        <br />
        <h3>Server Health Display</h3>
        <hr />
        <ServerHealthDropdown />
        <hr />
        <SanStatus />
      </div>
    );
  }
}

export default ServerHealth;