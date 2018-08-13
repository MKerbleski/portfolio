import React from 'react';
import {Route, Link} from 'react-router-dom';
import NavBarHome from './nav-bar-home';
import Title from './title.js';

const Home = () => {
  return (
    <div className="home-div">
      <NavBarHome />
      <div className="main">
        <Title />
        <div className="all-links">
          <Link className="link" to="/resume">resume</Link>
          <Link className="link" to="/current-project">current-project</Link>
          <Link className="link" to="/web-portfolio">web-portfolio</Link>
          <Link className="link" to="/media-portfolio">media-portfolio</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
