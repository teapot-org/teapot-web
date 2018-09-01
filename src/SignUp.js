import React from 'react';
import {
  Button, Form, Grid, Header, Segment,
} from 'semantic-ui-react';

const SignUp = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>
      {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}

    </style>
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
Sign up form
        </Header>
        <Form size="large">
          <Segment>

            <Form.Input error placeholder="Please enter your email" icon="at" iconPosition="left" />
            <Form.Input error placeholder="Please enter your username" icon="user" iconPosition="left" />
            <Form.Input error placeholder="Please enter your password" type="password" icon="lock" iconPosition="left" />
            <Form.Input fluid placeholder="First Name" />
            <Form.Input fluid placeholder="Last Name" />
            <Form.Input fluid placeholder="Birthday" type="date" />
            <Form.TextArea placeholder="Tell us more" />


            <Button color="teal" fluid size="large">
              Sign up
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  </div>
);

export default SignUp;
