import React, { Component } from 'react';
import './css/index.css';
import {Route} from 'react-router-dom';
import Resume from './components/resume';
import WebPortfolio from './components/webPortfolio';
import Home from './components/home';
import NavBar from './components/nav-bar/nav-bar';
import Footer from './components/footer';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppDiv>
        <NavBar />
        <Route path="/resume" render={Resume}></Route>
        <Route path="/webPortfolio" render={WebPortfolio}></Route>
        <Route path="/" exact render={Home}></Route>
        <Footer />
      </AppDiv>
    );
  }
}

export default App;

const AppDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 99.5vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;
