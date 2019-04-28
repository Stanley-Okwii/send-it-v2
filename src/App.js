import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import SendItApp from "./containers/SendItApp";
import Home  from './components/Home';
import store from '../src/store/index'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../src/css/styles.css";

toast.configure();

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
