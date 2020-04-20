import React, { Component } from "react"; 

class PDRStatus extends Component {

  componentDidMount() {
    document.title = 'Monitor Tool: PDR Status';
  }

  render() {
    return (
      <div>
        This is PDRStatus
      </div>
    );
  }
}

export default PDRStatus;