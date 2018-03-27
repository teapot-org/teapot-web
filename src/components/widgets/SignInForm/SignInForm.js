import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {signIn} from '../../../actions/oauth'

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  onSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.signIn(email, password);
  }

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
      <div>
        <form
          onSubmit={this.onSubmit}
        >
          <label>Email:
            <input
              name='email'
              type='email'
              value={email}
              onChange={this.onChange}
            />
          </label>
          <label>Password:
            <input
              name='password'
              type='password'
              value={password}
              onChange={this.onChange}
            />
          </label>
          <button type='submit' disabled={isLoading}>Sign in</button>
        </form>
      </div>
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
