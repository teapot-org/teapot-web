import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {Button, Container, Divider, Segment} from "semantic-ui-react";

class HomePage extends React.Component {
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
      <Container>
        <Segment padded>
          <Button
            as={Link}
            to={'/sign-in'}
            positive
            fluid
          >
            Sign In
          </Button>
          <Divider horizontal>OR</Divider>
          <Button
            as={Link}
            to={'/sign-up'}
            primary
            fluid
          >
            Sign Up Now
          </Button>
        </Segment>
      </Container>
    );
  }
}

export default connect(
  state => ({
    oauth: state.oauth
  }),
  dispatch => ({})
)(HomePage);