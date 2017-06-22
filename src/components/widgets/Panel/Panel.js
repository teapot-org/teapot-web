import React from 'react';
import { Link } from 'react-router-dom';

const Panel = () => (
  <ul>
    <li><Link to={{ pathname: '/' }}>Home</Link></li>
    <li><Link to={{ pathname: '/login' }}>Login</Link></li>
    <li><Link to={{ pathname: '/registration' }}>Registration</Link></li>
    <li><Link to={{ pathname: '/profile' }}>Profile</Link></li>
  </ul>
);

export default Panel;
