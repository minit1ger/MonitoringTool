import React, { Component } from "react"; 
import SystemHealthOverview from "../components/SystemHealthOverview";
import SystemHealthChannelStatus from "../components/SystemHealthChannelStatus";

class SystemHealth extends Component {
  componentDidMount() {
    document.title = 'Monitor Tool: System Health';
  }

  render() {
    return (
      <div>
        <SystemHealthOverview />
        <SystemHealthChannelStatus />
      </div>
    );
  }
}

export default SystemHealth;