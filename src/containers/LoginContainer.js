import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Segment } from "semantic-ui-react";

import { login } from "../../src/actions/registration/login";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
  }

  onTextChange = (_event, { name, value }) => {
    if (name) {
      if (name === "email") {
        this.setState({ email: value });
      } else if (name === "password") {
        this.setState({ password: value });
      }
    }
  };

  render() {
    return (
      <Segment vertical>
        <Form.Field>
          <Form.Input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Button
          loading={this.props.loading}
          onClick={() => {
            const data = {
              email: this.state.email,
              password: this.state.password
            };
            this.props.login(data);
          }}
          className="index-button"
          color="teal"
        >
          Login
        </Button>
      </Segment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    ...state,
    loading: state.loading
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    login: function(data) {
      dispatch(login(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
