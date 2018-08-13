import React from 'react';
import {Route, Link} from 'react-router-dom';
import Title from './title.js';
import AllContactTabs from './all-contact-tabs.js';


const NavBarHome = () => {
  return (
    <div className="nav-bar-home">
      <AllContactTabs />
    </div>
  )
}

export default NavBarHome;
