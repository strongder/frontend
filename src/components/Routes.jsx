import React from "react";

import { Route, Switch } from "react-router-dom";
import Customers from "../pages/Customers";
import { BrowserRouter } from "react-router-dom";
import Managerment from "../pages/Managerment";
import LiveChat from "../pages/LiveChat";
import Setting from "../pages/Setting";
import Report from "../pages/Report";
import 'bootstrap/dist/css/bootstrap.min.css'

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" exact component={Managerment} />
      <Route path="/live" exact component={LiveChat} />
      <Route path="/settings" exact component={Setting} />
      <Route path="/reports" exact component={Report} />
      <Route path="/customers" exact component={Customers} />
    </Switch>
  );
};

export default Routes;
