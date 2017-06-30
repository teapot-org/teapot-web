import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const TopPanel = () => (
  <div className="TopPanel">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signin">Sign in</Link></li>
      <li><Link to="/signup">Sign up</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </div>
);

export default TopPanel;
