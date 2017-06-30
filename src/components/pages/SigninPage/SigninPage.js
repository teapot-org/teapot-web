import React from 'react';

import { SigninForm } from '../../widgets/SigninForm';

class SigninPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <SigninForm/>
      </div>
    );
  }
}

export default SigninPage;
