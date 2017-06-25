import React from 'react';
import axios from 'axios';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8080/users', {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    }).then(response => {
      this.setState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      });
    });
  }

  render() {
    const { email, username, password, confirmPassword } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Email:
            <input
                name="email"
                type="email"
                value={email}
                onChange={this.onChange}
            />
          </label>

          <label>Username:
            <input
                name="username"
                type="text"
                value={username}
                onChange={this.onChange}
            />
          </label>

          <label>Password:
            <input
                name="password"
                type="password"
                value={password}
                onChange={this.onChange}
            />
          </label>

          <label>Confirm password:
            <input
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={this.onChange}
            />
          </label>

          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
