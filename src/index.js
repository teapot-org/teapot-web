import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Application } from './components';

ReactDOM.render(
  <Router>
    <Application/>
  </Router>,
  document.getElementById('root')
);
