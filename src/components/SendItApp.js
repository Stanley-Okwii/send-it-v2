import React, { Component } from 'react';
import { Form, Grid, Header, Button, Segment, Image } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../css/App.css';

class SendItApp extends Component {
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
                <Button icon='sign-in' content='Sign In' />
                <Button icon='user plus' content='Sign Up' />
              </Button.Group>
              <Segment vertical>
                <Form.Field>
                  <label className='label-align'>Email</label>
                  <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <label className='label-align' >Password</label>
                  <input placeholder='Password' />
                </Form.Field>
                <Button className='index-button' color='teal'>
                  Login
            </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SendItApp;
