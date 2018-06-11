import React from 'react'
import {connect} from 'react-redux'
import {Button, Form} from 'semantic-ui-react'

import {signUp} from '../../../actions/users'

class SignUpForm extends React.Component {
  state = {
    email: '',
    name: '',
    password: '',
    firstName: '',
    lastName: '',
    birthday: '',
    description: ''
  };

  onChange = (e, {name, value}) => this.setState({[name]: value});

  onSubmit(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const {email, name, password, firstName, lastName, birthday, description} = this.state;
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Form.Input
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={this.onChange}
          placeholder='E-mail address'
          required
        />
        <Form.Input
          label='Username'
          name='name'
          type='text'
          value={name}
          onChange={this.onChange}
          placeholder='Username'
          required
        />
        <Form.Input
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={this.onChange}
          placeholder='Password'
          required
        />
        <Form.Input
          label='First name'
          name='firstName'
          type='text'
          value={firstName}
          onChange={this.onChange}
          placeholder='First name'
        />
        <Form.Input
          label='Last name'
          name='lastName'
          type='text'
          value={lastName}
          onChange={this.onChange}
          placeholder='Last name'
        />
        <Form.Input
          label='Birthday'
          name='birthday'
          type='date'
          value={birthday}
          onChange={this.onChange}
          placeholder='Birthday'
        />
        <Form.TextArea
          label='Description'
          name='description'
          value={description}
          onChange={this.onChange}
          placeholder='Tell us more about you'
        />
        <Form.Field style={{textAlign: 'right'}}>
          <Button primary>Sign up</Button>
        </Form.Field>
      </Form>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    signUp: (email, name, password, firstName, lastName, description) => {
      dispatch(signUp(email, name, password, firstName, lastName, description));
    }
  })
)(SignUpForm);