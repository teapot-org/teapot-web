import React from 'react';
import {
  Button, Form, Grid, Header, Segment, Input, TextArea,
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
Sign up
        </Header>
        <Form size="large">
          <Segment>
            <Form.Field>
              <Input
                label={{ icon: 'asterisk' }}
                labelPosition="left corner"
                placeholder="email"
                type="email"
                required
              />
            </Form.Field>
            <Form.Field>
              <Input
                required
                placeholder="username"
                label={{ icon: 'asterisk' }}
                labelPosition="left corner"
              />
            </Form.Field>
            <Form.Field>
              <Input
                required
                type="password"
                placeholder="password"
                label={{ icon: 'asterisk' }}
                labelPosition="left corner"
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                placeholder="First Name"
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                placeholder="Last Name"
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                placeholder="Birthday"
                type="date"
              />
            </Form.Field>
            <Form.Field>
              <TextArea
                placeholder="Tell us more"
              />
            </Form.Field>


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
