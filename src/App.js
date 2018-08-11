import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components';

class App extends Component {
  render() {
    return (

      <AppDiv>
        <div className="all-contact-tabs">
          <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />
          <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />
          <img className="contact-tab" src="./img/twitter.svg" alt="twitter logo" />

        </div>

        <div className="main">

          <Header><Mi>MI</Mi><Ke>KE</Ke>RBLESKI</Header>

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

      </AppDiv>
    );
  }
}

export default App;

const AppDiv = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space space-between;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;

const Header = styled.h1`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 13vw;
`;

const Mi = styled.h1`
  color: white;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
  font-size: 13vw;

`;

const Ke = styled.h1`
  color: gray;
  font-size: 13vw;

`;
