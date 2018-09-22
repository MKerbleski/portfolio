import React from 'react';
import '../../css/index.css';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {
    // connnectGithub,
    getTime} from '../actions';
import { withRouter } from 'react-router'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Resume from './resume';
import WebPortfolio from './web-portfolio';
import MediaPortfolio from './media-portfolio';
import Home from './home';
import NavBar from './nav-bar/nav-bar';
import Footer from './footer.js';

class Portfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: ''
    }
  }

  componentDidMount(){
//    this.props.connnectGithub();
   this.props.getTime();
  }

  openAuth(){
    console.log('openAuth')
  };

  render(props) {
    console.log(this.state)
    return (
      <PortfolioDiv>
        <NavBar path="/" openAuth={this.openAuth} props="props" />
        <Route path="/resume" render={Resume}></Route>
        <Route  path="/current-project" render={Resume}></Route>
        <Route  path="/web" component={WebPortfolio}></Route>
        <Route  path="/media" component={MediaPortfolio}></Route>
        <Route exact path="/" render={() => <Home openAuth={this.openAuth} />} ></Route>
        <Footer path="/" date={this.props.state.time} lastUpdate={this.props.state.lastUpdate} />
      </PortfolioDiv>
    );
  }
}
// export default (Portfolio);

const PortfolioDiv = styled.div`
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
//   connnectGithub, 
  getTime
}

export default
DragDropContext(HTML5Backend)(
withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Portfolio)));
