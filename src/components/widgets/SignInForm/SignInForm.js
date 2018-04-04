import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Form, Button} from 'semantic-ui-react'

import {signIn} from '../../../actions/oauth'

class SignInForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onChange = (e, {name, value}) => this.setState({[name]: value});

  onSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.signIn(email, password);
  };

  render() {
    const {isAuthenticated, isLoading, profile} = this.props.oauth;
    const {email, password} = this.state;

    if (isAuthenticated) {
      return (
        <Redirect to={{
          pathname: `/profile/${profile.name}`,
          state: {from: this.props.location}
        }}/>
      );
    }

    return (
      <Form onSubmit={this.onSubmit} loading={isLoading}>
        <Form.Input
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={this.onChange}
          placeholder='E-mail address'
          icon='user'
          iconPosition='left'
          required
        />
        <Form.Input
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={this.onChange}
          placeholder='Password'
          icon='lock'
          iconPosition='left'
          required
        />
        <Form.Field style={{textAlign: 'right'}}>
          <Button>Sign in</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default connect(
  state => ({
    oauth: state.oauth
  }),
  dispatch => ({
    signIn: (username, password) => {
      dispatch(signIn(username, password));
    }
  })
)(SignInForm);
