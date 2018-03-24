import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {signOut} from '../../../actions/oauth'

class TopPanel extends React.Component {
  render() {
    const {isAuthenticated, user} = this.props.oauth;
    const {signIn, signOut} = this.props;

    if (isAuthenticated) {
      return (
        <div>
          <b>{user.profile.name}</b>
          <button onClick={signOut}>Log out</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={signIn}>Sign in</button>
        </div>
      );
    }
  }
}

export default connect(
  state => ({
    oauth: state.oauth
  }),
  dispatch => ({
    signIn: () => {
      dispatch(push('/sign-in'));
    },
    signOut: () => {
      dispatch(signOut());
    }
  })
)(TopPanel);