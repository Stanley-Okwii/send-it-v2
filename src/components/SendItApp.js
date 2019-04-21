import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import store from "../store";
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
      }
    };
    let { history } = this.props;
    history.push({
      pathname: '/'
     });
  }

  render() {
    const isLogInTab = store.getState().isLogInTab;
    console.log(isLogInTab);
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
                    <label className="label-align">Email</label>
                    <input placeholder="Email" />
                  </Form.Field>
                  <Form.Field>
                    <label className="label-align">Password</label>
                    <input type="password" placeholder="Password" />
                  </Form.Field>
                  <Button className="index-button" color="teal">
                    Login
                  </Button>
                </Segment>
              ) : (
                <Segment vertical>
                  <Form.Field>
                    {/* <label className="label-align">User Name</label>
                    <input
                      placeholder="User Name"
                      onChange={(event = this.handleEmailChange(event))}
                    /> */}
                    <Form.Input
                      name="username"
                      placeholder="username"
                      value={this.state.userSignUpData.username}
                      onChange={this.onTextChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="label-align">Email</label>
                    <input type="email" placeholder="Email" /> */}
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
                    {/* <label className="label-align">Confirm password</label>
                    <input type="password" placeholder="Confirm password" /> */}
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
    }
  };

  registerUser = () => {
    // const url = "https://sender-app.herokuapp.com/api/v1/user";
    const url = 'http://127.0.0.1:5000/api/v1/user'
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
            },
            () => console.log("toast closed"),
            () => console.log("toast clicked")
          );
          this.props.history.push('/app')
          console.log(this.props.history);
        } else {
          toast(
            {
              title: "Failed to sign up",
              type: "error",
              description: <p>{message}</p>
            },
            () => console.log("toast closed"),
            () => console.log("toast clicked")
          );
          console.log("failed login");
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  };
}
export default withRouter(SendItApp);
