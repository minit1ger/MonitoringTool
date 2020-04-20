import React, {Component} from "react"; 
import Dropdown from "react-dropdown"
import 'react-dropdown/style.css'
import data from '../data/serverStates.json';
import ServerHealthDisplay from "./ServerHealthDisplay.js";

class ServerHealthDropdown extends Component {

  constructor (props){
    super(props)
    this.state = {
      selected: "G2CMS01B"
    }

    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect( option )
  {
    console.log('You selected ', option.label);
    this.setState({selected: option.label})
  }

  testSelected()
  {
    console.log('Test: ' + this.state.selected);
    return this.state.selected;
  }

  render()
  {

    var options = [];
    data.forEach(element => {
      options.push( element.name );
    });

    var defaultOption = options[0];

    return(
      <div className="serverHealthDropdown">
        ServerHealthDropdown
       <Dropdown id="dropdown" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
       <ServerHealthDisplay serverName={this.testSelected()} />
      </div>);
  }
}

export default ServerHealthDropdown;