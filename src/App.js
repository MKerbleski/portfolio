import React, { Component } from 'react';
import './css/index.css';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="app-div">
        <div className="all-contact-tabs">
          <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />
          <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />
          <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />

        </div>

        <div className="main">

          <header className="header"><span>MIKERBLESKI</span></header>


          <div className="links">
            <Link to="/resume">resume</Link>
            <Link to="/current-project">current-project</Link>
            <Link to="/web-portfolio">web-portfolio</Link>
            <Link to="/media-portfolio">media-portfolio</Link>
          </div>

        </div>

        <footer>
          <div>Copyright: Michael Kerbleski</div>
          <div>Last Update:{}</div>
        </footer>

      </div>

    );
  }
}

export default App;

const Mi = styled.h1`
  color: white;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
  font-size: 13vw;

`;

const Ke = styled.h1`


`;
