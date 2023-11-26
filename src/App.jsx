import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route, BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import Layout from "./components/layout/Layout";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";
import Customers from "./pages/Customers";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path = '/' render={(props) => <Layout {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
