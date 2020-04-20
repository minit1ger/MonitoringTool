import React, { Component } from "react"; 
import SystemOverview from "../components/SystemOverview"
import SystemEvents from "../components/SystemEvents"

class MainOverview extends Component {

  componentDidMount() {
    document.title = 'Monitor Tool: Overview';
  }

  render() {
    return (
      <div>
        <SystemOverview />
        <SystemEvents systemName="Texas-A" />
        <SystemEvents systemName="Texas-B" />
        <SystemEvents systemName="Ohio-A" />
        <SystemEvents systemName="Ohio-Z" />
        <SystemEvents systemName="Massachusetts-A" />
        <SystemEvents systemName="Massachusetts-Z" />
      </div>
    );
  }
}

export default MainOverview;