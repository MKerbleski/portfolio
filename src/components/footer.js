import React from 'react';
import {Route, Link} from 'react-router-dom';
import NavBarHome from './nav-bar-home';

const Footer = () => {
  return (
    <footer>
      <div className="copyright">Copyright: Michael Kerbleski</div>
      <div className="last-update">Last Update:{}</div>
    </footer>
  )
}

export default Footer;
