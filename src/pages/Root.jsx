import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "../components/Store/Provider";
import RoutesPrivate from "../components/Routes/Private/Private";
import Logged from "./Logged";
import LogIn from "./LogIn";
import "../App.css";
const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <Route path="/logIn" component={LogIn} />
            <RoutesPrivate path="/" component={Logged} />
          </div>
        </div>
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
