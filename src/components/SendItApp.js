import React, { Component } from 'react';
import { Form, Grid, Header , Button, Segment, Message, Image} from 'semantic-ui-react';

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
              <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='d'>Sign Up</a>
        </Message>
        </Grid.Column>
      </Grid>
  </div>
    );
  }
}

export default SendItApp;
