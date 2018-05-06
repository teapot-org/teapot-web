import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {signOut} from '../../../actions/oauth'

class TopPanel extends React.Component {
  render() {
    const {isAuthenticated, profile} = this.props.oauth;

    return (
      <header>
        <div id="logo">Teapot</div>
        {isAuthenticated ? (
          <React.Fragment>
            <div>
              <a href="#" className="button" id="organizations">Организации</a>
              <a href="#" className="button" id="kanbans">Канбаны</a>
            </div>
            <div>
              <ul id="username" className="button">
                <a>{profile.name}</a>
                <ul className="submenu">
                  <li><Link to='/profile'>Профиль</Link></li>
                  {/*<li><a>Настройки</a></li>*/}
                  <li><a onClick={this.props.signOut}>Выход</a></li>
                </ul>
              </ul>
            </div>
          </React.Fragment>
        ) : (
          <div>
            <Link className="button" to='/sign-up'>Регистрация</Link>
            <Link className="button" to='/sign-in'>Вход</Link>
          </div>
        )}
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