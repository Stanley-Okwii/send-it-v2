import React, { Component } from "react";
import { Grid} from "semantic-ui-react";

import { SemanticToastContainer} from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";
import "semantic-ui-css/semantic.min.css";
import "../css/App.css";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogInTab: true,
    };
    let { history } = this.props;
    history.push({
      pathname: '/home'
     });
  }

  render() {
    return (
      <div>
        <SemanticToastContainer position="top-center" />
        <Grid
          textAlign="center"
          style={{ height: "60%" }}
          verticalAlign="middle"
        >
        Home
        </Grid>
      </div>
    );
  }
}
export default Home;
