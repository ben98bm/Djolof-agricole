import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Home from "../components/Pages/Home/Home";
import NavBar from "../components/NavBar";

class AppRouter extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <AuthenticatedRoute path="/" component={PrivateRoutes} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default AppRouter;
