import './styles.scss';

import React from 'react';

import { TopPanel } from '../widgets/TopPanel';
import { IndexPage } from '../pages/IndexPage';

class Application extends React.Component {

  render() {
    return (
      <div className="Application">
        <TopPanel/>
        <IndexPage/>
      </div>
    );
  }
}

export default Application;
