import React from 'react'
import {connect} from 'react-redux'
import {Route} from "react-router";

import Loading from '../../widgets/Loading'
import Error404Page from "../Error404Page";
import {getUserByUsername} from '../../../actions/users'

class ProfilePage extends React.Component {
  componentWillMount() {
    const {username} = this.props.match.params;
    const {isAuthenticated, profile} = this.props.oauth;
    const {getUserByUsername} = this.props;

    if (typeof username !== 'undefined') {
      getUserByUsername(username);
    } else if (isAuthenticated) {
      getUserByUsername(profile.name)
    }
  }

  render() {
    const {isLoading, user} = this.props.users;

    if (isLoading) {
      return <Loading/>;
    }

    if (user != null) {
      return (
        <div>
          <p>Пользователь</p>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.birthday}</p>
        </div>
      );
    }

    return <Route component={Error404Page}/>
  }
}

export default connect(
  state => ({
    users: state.users,
    oauth: state.oauth
  }),
  dispatch => ({
    getUserByUsername: (username) => {
      dispatch(getUserByUsername(username));
    }
  })
)(ProfilePage);