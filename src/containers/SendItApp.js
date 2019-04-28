import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Grid, Header, Button, Image } from "semantic-ui-react";

import LoginContaner from "../../src/containers/LoginContainer";
import SignUpContainer from "../../src/containers/SignUpContainer";

import { toggleTab } from "../actions/registration/login";
import "semantic-ui-css/semantic.min.css";

import "../css/App.css";

export class SendItApp extends Component {
  constructor(props) {
    super(props);
    let { history } = this.props;
    history.push({
      pathname: "/"
    });
  }

  render() {
    return (
      <div>
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
                  onClick={() => this.props.toggleTab(true)}
                  content="Sign In"
                />
                <Button
                  id="signup"
                  icon="user plus"
                  onClick={() => this.props.toggleTab(false)}
                  content="Sign Up"
                />
              </Button.Group>
              {this.props.isLogInTab ? <LoginContaner /> : <SignUpContainer />}
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export const mapStateToProps = state => {
  return {
    ...state,
    isLogInTab: state.isLogInTab
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    toggleTab: function(value) {
      dispatch(toggleTab(value));
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SendItApp));
