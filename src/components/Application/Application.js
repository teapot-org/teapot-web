import React from 'react'

import TopPanel from '../widgets/TopPanel'
import Router from '../widgets/Router'
import Footer from '../widgets/Footer'

class Application extends React.Component {
  render() {
    return (
      <div id='root'>
        <TopPanel/>
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default Application;