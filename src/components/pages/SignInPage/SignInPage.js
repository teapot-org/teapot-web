import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'

import SignInForm from "../../widgets/SignInForm";

export default () => (
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