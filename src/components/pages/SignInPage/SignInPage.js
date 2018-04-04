import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import SignInForm from "../../widgets/SignInForm";

class SignInPage extends React.Component {
  render() {
    const {isAuthenticated} = this.props.oauth;

    if (isAuthenticated) {
      return (
        <Redirect to={{
          pathname: '/profile',
          state: {from: this.props.location}
        }}/>
      );
    }

    return (
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column/>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Segment padded color='blue'>
              <SignInForm/>
            </Segment>
          </Grid.Column>
          <Grid.Column/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  state => ({
    oauth: state.oauth
  }),
  dispatch => ({})
)(SignInPage);