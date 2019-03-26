import React, { Component } from 'react';
import { Form, Grid, Header, Button, Segment, Image } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../css/App.css';


class SendItApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogInTab: true
    };
  }

  render() {
    return (
      <div>
        <Grid textAlign='center' style={{ height: '60%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 600 }}>
            <Header as='h2' color='teal' textAlign='center'>
              SendIT Courier Services
                <Image src='logo.png' />
            </Header>
            <Form className='form-wrapper' size='large'>
              <Button.Group>
                <Button icon='sign-in' onClick={this.showLogin} content='Sign In' />
                <Button icon='user plus' onClick={this.showSignUp} content='Sign Up' />
              </Button.Group>
              {this.state.isLogInTab ? (
                <Segment vertical>
                  <Form.Field>
                    <label className='label-align'>Email</label>
                    <input placeholder='Email' />
                  </Form.Field>
                  <Form.Field>
                    <label className='label-align' >Password</label>
                    <input type='password' placeholder='Password' />
                  </Form.Field>
                  <Button className='index-button' color='teal'>
                    Login
            </Button>
                </Segment>
            )
              :
              (
                  <Segment vertical>
                <Form.Field>
                  <label className='label-align'>User Name</label>
                  <input placeholder='User Name' />
                </Form.Field>
                <Form.Field>
                  <label className='label-align' >Email</label>
                  <input type='email' placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <label className='label-align' >Password</label>
                  <input type='password' placeholder='Password' />
                </Form.Field>
                <Form.Field>
                  <label className='label-align' >Confirm password</label>
                  <input type='password' placeholder='Confirm password' />
                </Form.Field>
                <Button className='index-button' color='teal'>
                  sign up
                </Button>
              </Segment>
              )
            }
            </Form>
          </Grid.Column>
        </Grid>
      </div>
        );
      }

  showLogin = () => {
        this.setState({ isLogInTab: true });
        console.log('showing log in');
      }

  showSignUp = () => {
        this.setState({ isLogInTab: false });
        console.log('showing sign up');

      }
    }

    export default SendItApp;
