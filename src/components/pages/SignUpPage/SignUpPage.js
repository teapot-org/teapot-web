import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'

import SignUpForm from "../../widgets/SignUpForm";

class SignUpPage extends React.Component {
  render() {
    return (
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column/>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Segment padded color='blue'>
              <SignUpForm/>
            </Segment>
          </Grid.Column>
          <Grid.Column/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SignUpPage;