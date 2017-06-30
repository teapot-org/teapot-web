import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SigninForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getInitialState() {
    return {
      email: '',
      password: '',
    };
  }

  onChange(event) {
    const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    axios({
      method: 'post',
      url: 'http://localhost:8080/oauth/token',

      headers: {
        'Authorization': `Basic ${btoa('client:secret')}`,
      },

      params: {
        username: email,
        password: password,
        grant_type: 'password',
        client_id: 'client',
        client_secret: 'secret',
      },
    }).then(response => {
      axios
        .get(`http://localhost:8080/users/${email}`)
        .then(response2 => {
          const { username } = response2.data;

          this.setState(this.getInitialState);
          this.props.history.push(`/profile/${username}`);
        });
    });
  }

  render() {
    const { email, password } = this.state;

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

          <label>Password:
            <input
                name="password"
                type="password"
                value={password}
                onChange={this.onChange}
            />
          </label>

          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SigninForm);
