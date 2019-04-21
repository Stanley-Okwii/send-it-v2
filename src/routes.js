import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SendItApp from "./components/SendItApp";
import { Provider } from "react-redux";
import store from '../src/store/index'

const DefaultApp = () => (
  <Provider store={store}>
    <Router history={createBrowserHistory}>
      <div>
        <Route exact path="/" component={SendItApp} />
      </div>
    </Router>
  </Provider>
);

export default DefaultApp;
