import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import SendItApp from "./components/SendItApp";


const DefaultApp = () => (
  <Router history={createBrowserHistory}>
    <div>
      <Route exact path="/" component={SendItApp} />
    </div>
  </Router>
);

export default DefaultApp;
