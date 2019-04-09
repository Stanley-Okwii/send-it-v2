import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import SendItApp from "./components/SendItApp";
import { App } from "./components/App";


const DefaultApp = () => (
  <Router history={createBrowserHistory}>
    <div>
      <Route exact path="/" component={SendItApp} />
      <Route path="/app" component={App} />
    </div>
  </Router>
);

// function Header() {
//   return (
//     <ul>
//       <li>
//         <Link to="/">Todo</Link>
//       </li>
//       <li>
//         <Link to="/sendit">Send it</Link>
//       </li>
//     </ul>
//   );
// }

export default DefaultApp;
