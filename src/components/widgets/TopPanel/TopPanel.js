import React from 'react'
import {connect} from 'react-redux'

import {signOut} from '../../../constants/actionTypes'

class TopPanel extends React.Component {
  render() {
    // const {isAuthenticated, profile} = this.props.oauth;
    // return (
    //   <Menu borderless>
    //     {isAuthenticated ? (
    //       <Menu.Menu position='right'>
    //         <Dropdown item simple text={profile.name}>
    //           <Dropdown.Menu>
    //             <Dropdown.Item
    //               as={Link}
    //               to='/'
    //               onClick={this.props.signOut}
    //             >
    //               <Icon name='sign out'/>
    //               Sign out
    //             </Dropdown.Item>
    //           </Dropdown.Menu>
    //         </Dropdown>
    //       </Menu.Menu>
    //     ) : (
    //       <Menu.Menu position='right'>
    //         <Menu.Item as={Link} to='/sign-in'>
    //           <Icon name='sign in'/>
    //           Sign in
    //         </Menu.Item>
    //         <Menu.Item as={Link} to='/sign-up'>
    //           <Icon name='add user'/>
    //           Sign up
    //         </Menu.Item>
    //       </Menu.Menu>
    //     )}
    //   </Menu>
    // );


    return (
      <header>
        <div id="logo">Teapot</div>
        <a href="#" className="button" id="organizations">Организации</a>
        <a href="#" className="button" id="kanbans">Канбаны</a>
        <a href="#" className="button" id="notifications">Уведомления</a>
        <div id="username" class="button">
          <img src="user.jpg" alt="user" title="Закрытый канбан"/>
          Username
          <div class="usermenu"></div>
        </div>
      </header>
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