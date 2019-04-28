import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Segment } from "semantic-ui-react";

import { Register } from "../../src/actions/registration/login";


export class SignUpContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password1: "",
      email: "",
      username: ""
    };
  }

  onTextChange = (_event, { name, value }) => {
    if (name) {
      if (name === "email") {
        this.setState({ email: value });
      } else if (name === "password1") {
        this.setState({ password1: value });
      } else if (name === "username") {
        this.setState({ username: value });
      }
    }
  };

  render() {
    return (
        <Segment vertical>
        <Form.Field>
          <Form.Input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="password1"
            placeholder="password"
            type="password"
            value={this.state.password1}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Button loading={this.props.loading}
          onClick={() => {
            const data = {
              email: this.state.email,
              password: this.state.password1,
              name: this.state.username
            };
              this.props.register(data);
          }}
            className="index-button" color="teal">
          sign up
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
    register: function(data) {
      dispatch(Register(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
