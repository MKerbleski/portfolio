import React, { Component } from 'react';
import '../css/index.css';
import {Route} from 'react-router-dom';
import Resume from './resume';
import WebPortfolio from './web-portfolio';
import Home from './home';
import NavBar from './nav-bar/nav-bar';
import Footer from './footer';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {connnectGithub} from './../actions';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdate: ''
    }
  }

  componentDidMount(){
   // this.props.connnectGithub();
  }

  render() {
    return (
      <AppDiv>
        <NavBar />
        <Route path="/resume" render={Resume}></Route>
        <Route path="/web-portfolio" component={WebPortfolio} monkey={this.props.githubData}></Route>
        <Route path="/" exact render={Home}></Route>
        <Footer />
      </AppDiv>
    );
  }
}
// export default (App)

const AppDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${'' /* height: 99.5vh; */}
  width: 100%;
  margin: 0;
  padding: 0;
`;


const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {
  connnectGithub
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
