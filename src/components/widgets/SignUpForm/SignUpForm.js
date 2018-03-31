import React from 'react'
import {connect} from 'react-redux'

import {signUp} from '../../../users/signUp'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      firstName: '',
      lastName: '',
      description: ''
    };
  }

  onChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  onSubmit(event) {
    event.preventDefault();
    const {email, name, password, firstName, lastName, description} = this.state;
    this.props.signUp(email, name, password, firstName, lastName, description);
  }

  render() {
    const {email, name, password, firstName, lastName, description} = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>
            e-mail:
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.onChange.bind(this)}
            />
          </label>

          <label>
            name:
            <input
              name="name"
              type="name"
              value={name}
              onChange={this.onChange.bind(this)}
            />
          </label>

          <label>
            password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.onChange.bind(this)}
            />
          </label>

          <label>
            First name:
            <input
              name="firstName"
              type="firstName"
              value={firstName}
              onChange={this.onChange.bind(this)}
            />
          </label>

          <label>
            Last name:
            <input
              name="lastName"
              type="lastName"
              value={lastName}
              onChange={this.onChange.bind(this)}
            />
          </label>

          <label>
            description:
            <input
              name="description"
              type="description"
              value={description}
              onChange={this.onChange.bind(this)}
            />
          </label>
          <button type='submit'>SignUp</button>
        </form>
      </div>
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