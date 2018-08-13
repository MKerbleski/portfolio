import React from 'react';
import {Route, Link} from 'react-router-dom';
import Title from './title.js';
import AllContactTabs from './all-contact-tabs.js';

const NavBarAway = () => {
  return (
    <div className="nav-bar-away">
        <Title />
        <AllContactTabs />
    </div>
  )
}

export default NavBarAway;
