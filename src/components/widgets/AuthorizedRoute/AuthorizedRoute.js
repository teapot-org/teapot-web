import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router'
import {Redirect} from 'react-router-dom'

class AuthorizedRouteContainer extends React.Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated
            ? <Component {...props} />
            : (
              <Redirect to={{
                pathname: '/sign-in',
                state: {from: props.location}
              }}/>
            )
        }
      />
    )
  }
}

export default connect(state => ({
  isAuthenticated: state.oauth.isAuthenticated
}))(AuthorizedRouteContainer);


