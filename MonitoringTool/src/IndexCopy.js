import React from 'react';
import ReactDOM from 'react-dom';
import ServerFaultSummary from './components/ServerFaultSummary';
import ServerHealthDisplay from "./components/ServerHealthDisplay";

ReactDOM.render(<div>
    <h3>Server Failure Summary</h3>
    <hr/>
    <ServerFaultSummary />
    <br />
    <h3>Server Health Display</h3>
    <hr />
    <ServerHealthDisplay />
  </div>, document.getElementById('root'));

