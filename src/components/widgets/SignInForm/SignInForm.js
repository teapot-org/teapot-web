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
  }

  onChange(event) {
    const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  onSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.signIn(email, password);
  }

  render() {
    const {oauth} = this.props;
    const {email, password} = this.state;

    if (oauth.isAuthenticated) {
      return (
        <Redirect to={{
          pathname: '/',
          state: {from: this.props.location}
        }}/>
      );
    }

    return (
      <div>
        <form
          onSubmit={this.onSubmit.bind(this)}
        >
          <label>Email:
            <input
              name='email'
              type='email'
              value={email}
              onChange={this.onChange.bind(this)}
            />
          </label>
          <label>Password:
            <input
              name='password'
              type='password'
              value={password}
              onChange={this.onChange.bind(this)}
            />
          </label>
          <button type='submit' disabled={oauth.authenticating}>Sign in</button>
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
