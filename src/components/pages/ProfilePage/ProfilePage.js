import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Error404 } from '../errors/Error404';
import { Loading } from '../../widgets/Loading';

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      user: null,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/users/${this.props.match.params.username}`)
      .then(response => {
        this.setState({ isLoading: false });

        if (response) {
          switch (response.status) {
            case 200:
              this.setState({ user: response.data });
              break;
          }
        }
      }).catch(error => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { user, isLoading } = this.state;

    if (isLoading) {
      return <Loading/>;
    }

    if (user !== null) {
      return (
        <div>
          <h1>Profile Page</h1>
          <p>Hello, {user.firstName} {user.lastName} (aka <em>{user.username}</em>)</p>
          <p>Your email: {user.email}</p>
          <p></p>
        </div>
      );
    } 
    
    return <Route component={Error404}/>
  }
}

export default ProfilePage;
