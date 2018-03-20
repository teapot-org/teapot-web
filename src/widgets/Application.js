import React from 'react'

import TopPanel from './TopPanel'
import Router from './Router'

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