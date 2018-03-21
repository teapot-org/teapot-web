import React from 'react'

import TopPanel from '../widgets/TopPanel'
import Router from '../widgets/Router'

class Application extends React.Component {
  render() {
    return (
      <div>
        <TopPanel/>
        <Router/>
      </div>
    );
  }
}

export default Application;