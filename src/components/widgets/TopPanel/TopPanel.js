import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const TopPanel = () => (
  <ul className="TopPanel">
    <li><Link to={{ pathname: '/' }}>Home</Link></li>
    <li><Link to={{ pathname: '/login' }}>Login</Link></li>
    <li><Link to={{ pathname: '/signup' }}>Signup</Link></li>
    <li><Link to={{ pathname: '/profile' }}>Profile</Link></li>
  </ul>
);

export default TopPanel;
