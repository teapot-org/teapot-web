import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {signOut} from '../../../constants/actionTypes'
import {Dropdown, Icon, Menu} from "semantic-ui-react";

class TopPanel extends React.Component {
  render() {
    const {isAuthenticated, profile} = this.props.oauth;
    return (
      <Menu attached='top' borderless>
        {isAuthenticated ? (
          <Menu.Menu position='right'>
            <Dropdown item simple text={profile.name}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to='/'
                  onClick={this.props.signOut}
                >
                  <Icon name='sign out'/>
                  Sign out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        ) : (
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/sign-in'>
              <Icon name='sign in'/>
              Sign in
            </Menu.Item>
            <Menu.Item as={Link} to='/sign-up'>
              <Icon name='add user'/>
              Sign up
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

export default connect(
  state => ({
    oauth: state.oauth
  }),
  dispatch => ({
    signOut: () => {
      dispatch(signOut());
    }
  })
)(TopPanel);