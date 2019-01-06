import React from 'react';
import '../css/index.css';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { connnectGithub, getTime } from './../actions';
import { withRouter } from 'react-router'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Print from './pages/resume/print';
import ResumePage from './pages/resume/resumePage';
import WebPortfolio from './pages/web/web-portfolio';
import MediaPortfolio from './pages/media/media-portfolio';

import Home from './pages/home/home';
import NavBar from './nav-bar/nav-bar';
import Footer from './footer/footer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: '',
      showHeaders: true,
    }
  }

  openAuth(){
    console.log('openAuth')
  };

  hideHeaders = () => {
    this.setState({
      showHeaders: false,
    })
  }
  
  showHeaders = () => {
    this.setState({
      showHeaders: true,
    })
  }

  render() {
    return (
      <AppDiv>
        {this.state.showHeaders ? <NavBar /> : null}
          <Route exact path="/print" render={() => {
            return <Print hideHeaders={this.hideHeaders} showHeaders={this.showHeaders}/>}} />
          <Route exact path="/resume" render={ResumePage} />
          <Route exact path="/web" component={WebPortfolio} />
          <Route exact path="/media" component={MediaPortfolio} />
          <Route exact path="/" render={() => <Home openAuth={this.openAuth} />} />
        {this.state.showHeaders ? <Footer /> : null}
      </AppDiv>
    );
  }
}

const AppDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export default DragDropContext(HTML5Backend)(
  withRouter(App));