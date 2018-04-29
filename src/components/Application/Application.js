import React from 'react'

import TopPanel from '../widgets/TopPanel'
import Router from '../widgets/Router'
import Footer from '../widgets/Footer'

class Application extends React.Component {
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