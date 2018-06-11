import React from 'react'

import TopPanel from '../widgets/TopPanel'
import Router from '../widgets/Router'
import Footer from '../widgets/Footer'
import axios from '../../http-common'
import {store} from '../../store'

class Application extends React.Component {
  componentWillMount() {
    const {isAuthenticated, accessToken} = store.getState().oauth;
    if (isAuthenticated) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  }

  render() {
    return (
      <React.Fragment>
        <TopPanel/>
        <Router/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Application;