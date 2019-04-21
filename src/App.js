import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SendItApp from "./components/SendItApp";
import Home  from './components/Home';
import { Provider } from "react-redux";
import store from '../src/store/index'

const App = () => (
  <Provider store={store}>
    <Router history={createBrowserHistory}>
      <div>
        <Route exact path="/" component={SendItApp} />
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  </Provider>
);

export default App;
