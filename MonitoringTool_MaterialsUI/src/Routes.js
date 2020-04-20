import React from 'react'; 
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './views/RouteWithLayout';
import Main from './Main'

import Dashboard from "./views/Dashboard/Dashboard";
import SystemHealth from "./views/SystemHealth/SystemHealth";
import ServerHealth from "./views/ServerHealth/ServerHealth";
import PDRStatus from "./views/PDRStatus/PDRStatus";
import Xmidas from "./views/Xmidas/Xmidas";

const Routes = () => {
  return ( 
    <Switch>
      <Redirect
        exact from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Main}
        path="/dashboard"
      />
      <RouteWithLayout 
        component={SystemHealth}
        exact
        layout={Main}
        path="/systemhealth"
      />
      <RouteWithLayout 
        component={ServerHealth}
        exact
        layout={Main}
        path="/serverhealth"
      />
      <RouteWithLayout
        component={PDRStatus}
        exact
        layout={Main}
        path="/pdrstatus"
      />
      <RouteWithLayout
        component={Xmidas}
        exact
        layout={Main}
        path="/xmidas"
      />
    </Switch>
  );
};

export default Routes; 