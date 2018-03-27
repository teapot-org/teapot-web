import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import {signOut} from '../../../constants/actionTypes'

class TopPanel extends React.Component {
  render() {
    const {isAuthenticated, profile} = this.props.oauth;
    const {signIn, signOut} = this.props;

    if (isAuthenticated) {
      return (
        <div>
          <b>{profile.name}</b>
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
      dispatch(push('/sign-in'))
    }
  })
)(TopPanel);