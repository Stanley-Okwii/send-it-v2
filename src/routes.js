import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SendItApp } from "./components/SendItApp";
import { App } from "./components/App";


const DefaultApp = () => (
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={App} />
      <Route path="/sendit" component={SendItApp} />
    </div>
  </Router>
);

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Todo</Link>
      </li>
      <li>
        <Link to="/sendit">Send it</Link>
      </li>
    </ul>
  );
}

export default DefaultApp;
