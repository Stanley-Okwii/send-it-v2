import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Form, Grid, Header, Button, Segment, Image } from "semantic-ui-react";

import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";
import "semantic-ui-css/semantic.min.css";
import "../css/App.css";

export class SendItApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogInTab: true,
      userSignUpData: {
        username: "",
        email: "",
        password1: "",
        password2: ""
      },
      loginData: {
        email: "",
        password:""
      },
    };
    let { history } = this.props;
    history.push({
      pathname: '/'
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
                  icon="user plus"
                  onClick={() => this.showSignUp()}
                  content="Sign Up"
                />
              </Button.Group>
              {this.state.isLogInTab ? (
                <Segment vertical>
                  <Form.Field>
                    <Form.Input
                      name="loginMail"
                      placeholder="Email"
                      value={this.state.loginData.email}
                      onChange={this.onTextChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="loginPassword"
                      placeholder="Password"
                      value={this.state.loginData.password}
                      onChange={this.onTextChange}
                    />
                  </Form.Field>
                  <Button onClick={this.logIn} className="index-button" color="teal">
                    Login
                  </Button>
                </Segment>
              ) : (
                <Segment vertical>
                  <Form.Field>
                    <Form.Input
                      name="username"
                      placeholder="username"
                      value={this.state.userSignUpData.username}
                      onChange={this.onTextChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="email"
                      placeholder="email"
                      value={this.state.userSignUpData.email}
                      onChange={this.onTextChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="password1"
                      placeholder="password"
                      type="password"
                      value={this.state.userSignUpData.password1}
                      onChange={this.onTextChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="password2"
                      type="password"
                      placeholder="confirm password"
                      value={this.state.userSignUpData.password2}
                      onChange={this.onTextChange}
                    />
                  </Form.Field>
                  <Button onClick={this.registerUser} className="index-button" color="teal">
                    sign up
                  </Button>
                </Segment>
              )}
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

  onTextChange = (_event, { name, value }) => {
    if (name) {
      if (name === "username") {
        this.setState({
          userSignUpData: { ...this.state.userSignUpData, username: value }
        });
      } else if (name === "email") {
        this.setState({
          userSignUpData: { ...this.state.userSignUpData, email: value }
        });
      } else if (name === "password1") {
        this.setState({
          userSignUpData: { ...this.state.userSignUpData, password1: value }
        });
      } else if (name === "password2") {
        this.setState({
          userSignUpData: { ...this.state.userSignUpData, password2: value }
        });
      }
      else if (name === "loginPassword") {
        this.setState({
          loginData: { ...this.state.loginData, password: value }
        });
      }
      else if (name === "loginMail") {
        this.setState({
          loginData: { ...this.state.loginData, email: value }
        });
      }
    }
  };

  registerUser = () => {
    const url = "https://sender-app.herokuapp.com/api/v1/user";
    const { email, password1, username} = this.state.userSignUpData
    const raw_data = {
      "email": email,
      "password": password1,
      "name": username
    }

    const request = {
      method: "POST",
      body: JSON.stringify(raw_data),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, request)
      .then(response => response.json())
      .then(data => {
        const message = data["message"];
        if (message === "successfully created a new account") {
          toast(
            {
              title: "Sign up",
              type: "success",
              description: <p>Successfully created an account</p>
            }
          );
        } else {
          toast(
            {
              title: "Failed to sign up",
              type: "error",
              description: <p>{message}</p>
            }
          );
        }
      })
      .catch(function(error) {
        return;
      });
  };

  logIn = () => {
    const url = "https://sender-app.herokuapp.com/api/v1/auth/signin";
    const { email, password} = this.state.loginData
    const raw_data = {
      "email": email,
      "password": password,
    }

    const request = {
      method: "POST",
      body: JSON.stringify(raw_data),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, request)
      .then(response => response.json())
      .then(data => {
        const message = data["message"];
        if (message === "You have logged in successfully.") {
          toast(
            {
              title: "Login success",
              type: "success",
              description: <p>Successfully logged in</p>
            }
          );
          const token = data["user_token"]
          sessionStorage.setItem("user_token", token);
          this.props.history.push('/home')
        } else {
          toast(
            {
              title: "Failed to sign up",
              type: "error",
              description: <p>{message}</p>
            }
          );
        }
      })
      .catch(function(error) {
        return;
      });
  };
}
export default withRouter(SendItApp);
