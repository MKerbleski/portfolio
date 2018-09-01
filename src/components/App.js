import React from 'react';
import '../css/index.css';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {connnectGithub, getTime} from './../actions';
import { withRouter } from 'react-router'

import Resume from './resume';
import WebPortfolio from './web-portfolio';
import MediaPortfolio from './media-portfolio';
import Home from './home';
import NavBar from './nav-bar/nav-bar';
import Footer from './footer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: ''
    }
  }

  componentDidMount(){
   // this.props.connnectGithub();
   this.props.getTime();
  }

  render() {
    return (
      <AppDiv>
        <NavBar />
        <Route exact path="/resume" render={Resume}></Route>
        <Route exact path="/current-project" render={Resume}></Route>
        <Route exact path="/web-portfolio" component={WebPortfolio}></Route>
        <Route exact path="/media-portfolio" component={MediaPortfolio}></Route>
        <Route exact path="/" render={Home}></Route>
        <Footer date={this.props.state.time}/>
      </AppDiv>
    );
  }
}
// export default (App);

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
  connnectGithub, getTime
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
