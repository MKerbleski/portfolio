import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components';

const AppDiv = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

class App extends Component {
  render() {
    return (

      <AppDiv>
        <div className="contact-tabs">
          <img src="./img/twitter.svg" alt="twitter logo" />
        </div>

        <Header><Mi>MI</Mi><Ke>KE</Ke>RBLESKI</Header>

        <div className="links">
          <Link to="/resume">resume</Link>
          <Link to="/current-project">current-project</Link>
          <Link to="/web-portfolio">web-portfolio</Link>
          <Link to="/media-portfolio">media-portfolio</Link>
        </div>

      </AppDiv>
    );
  }
}

export default App;
