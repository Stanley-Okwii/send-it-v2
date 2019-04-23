import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Grid, Header, Button, Image } from "semantic-ui-react";

import { SemanticToastContainer } from "react-semantic-toasts";
import LoginContaner from "../../src/containers/LoginContainer";
import SignUpContainer from "../../src/containers/SignUpContainer";

import "react-semantic-toasts/styles/react-semantic-alert.css";
import "semantic-ui-css/semantic.min.css";

import "../css/App.css";

export class SendItApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
    let { history } = this.props;
    history.push({
      pathname: "/"
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
          <Grid.Column style={{ maxWidth: 600 }}>
            <Header as="h2" color="teal" textAlign="center">
              SendIT Courier Services
              <Image src="logo.png" />
            </Header>
            <Form className="form-wrapper" size="large">
              <Button.Group>
                <Button
                  icon="sign-in"
                  onClick={() => this.showLogin()}
                  content="Sign In"
                />
                <Button
                  id="signup"
                  icon="user plus"
                  onClick={() => this.showSignUp()}
                  content="Sign Up"
                />
              </Button.Group>
              {this.state.isLogInTab ? <LoginContaner /> : <SignUpContainer />}
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  showLogin = () => {
    this.setState({ isLogInTab: true });
  };

  showSignUp = () => {
    this.setState({ isLogInTab: false });
  };
}

export default withRouter(SendItApp);
