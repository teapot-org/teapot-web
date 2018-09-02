import React from 'react';
import {
  Button, Form, Grid, Header, Segment, Input, TextArea,
} from 'semantic-ui-react';

class SignUp extends React.Component {

    state = {
     email: '',
     username: '',
     password: '',
     firstName: '',
     lastName: '',
     birthday: '',
     description: ''
  };

  onChange = e => {
    const { name, value }  = e.target;
    this.setState({ [name]: value  })
    console.log(this.state);
  }


  render() {

    const {email, username, password, firstName, lastName, birthday, description} = this.state;

    return (
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
                    onChange={this.onChange}
                    name="email"
                    value={email}
                    label={{ icon: 'asterisk' }}
                    labelPosition="left corner"
                    placeholder="email"
                    type="email"
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    onChange={this.onChange}
                    name="username"
                    value={username}
                    required
                    placeholder="username"
                    label={{ icon: 'asterisk' }}
                    labelPosition="left corner"
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    onChange={this.onChange}
                    name="password"
                    value={password}
                    required
                    type="password"
                    placeholder="password"
                    label={{ icon: 'asterisk' }}
                    labelPosition="left corner"
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    onChange={this.onChange}
                    name="firstName"
                    value={firstName}
                    fluid
                    placeholder="First Name"
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    onChange={this.onChange}
                    name="lastName"
                    value={lastName}
                    fluid
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    onChange={this.onChange}
                    name="birthday"
                    value={birthday}
                    fluid
                    placeholder="Birthday"
                    type="date"
                  />
                </Form.Field>
                <Form.Field>
                  <TextArea
                    onChange={this.onChange}
                    name="description"
                    value={description}
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
  }
}
export default SignUp;
