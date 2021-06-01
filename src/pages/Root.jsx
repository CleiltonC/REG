import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "../components/Store/Provider";
import RoutesPrivate from "../components/Routes/Private/Private";
import Home from "./Home";
import LogIn from "./LogIn";
import History from "./History";
import "../App.css";
const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <Route exact path="/logIn" component={LogIn} />
            <RoutesPrivate exact path="/" component={Home} />

            <RoutesPrivate exact path="/History" component={History} />
          </div>
        </div>
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
