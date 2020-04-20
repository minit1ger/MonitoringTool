import React, { Component } from "react"; 
import {
  Route, 
  NavLink,
  HashRouter
} from "react-router-dom";

import MainOverview from "./MainOverview";
import ServerHealth from "./ServerHealth";
import SystemHealth from "./SystemHealth";
import PDRStatus from "./PDRStatus";
import XMidas from "./XMidas";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typeography from '@material-ui/core/Typography';

/**
*     Main: This class is used to route views of containers.   
*/
class Main extends Component {
   
   // Render the router
   render() {
     return (
       <HashRouter>
         <div>
           <AppBar postition="static">
             <Toolbar>
               <Typeography variant="title" color="inherit">
                 Test Test Test
               </Typeography>
             </Toolbar>
           </AppBar>
           <h1> Monitor Tool </h1>
          <ul className="header">
            <li><NavLink exact to="/">Overview</NavLink></li>
            <li><NavLink to="/ServerHealth">Server Health</NavLink></li>
            <li><NavLink to="/SystemHealth">System Health</NavLink></li>
            <li><NavLink to="/PDRStatus">PDR Status</NavLink></li>
            <li><NavLink to="/Xmidas">Xmidas</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={MainOverview} />
            <Route path="/ServerHealth" component={ServerHealth} />
            <Route path="/SystemHealth" component={SystemHealth} />
            <Route path="/PDRStatus" component={PDRStatus} />
            <Route path="/XMidas" component={XMidas} />
          </div>
         </div>
       </HashRouter>
     );
   }
}
export default Main; 