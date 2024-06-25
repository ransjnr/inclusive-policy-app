import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Inclusive Policy App</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/policies'>Policies</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
