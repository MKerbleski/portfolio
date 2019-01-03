import React from 'react';
import '../css/index.css';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {connnectGithub, getTime} from './../actions';
import { withRouter } from 'react-router'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Resume from './pages/resume/resume';
import Print from './pages/resume/print';
import WebPortfolio from './pages/web-portfolio';
import MediaPortfolio from './pages/media-portfolio';

import Home from './pages/home/home';

import NavBar from './nav-bar/nav-bar';
import Footer from './footer/footer';
import Website from './pages/website';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: '',
      showHeaders: false,
    }
  }

  componentDidMount(props) {
    this.props.connnectGithub();
  }

  openAuth(){
    console.log('openAuth')
  };

  hideHeaders = () => {
    console.log("hideHeaders")
    this.setState({
      showHeaders: false,
    })
  }
  
  showHeaders = () => {
    this.setState({
      showHeaders: false,
    })
  }

  render() {
    console.log(this.state)
    return (
      <AppDiv>
        {/* <Route path="/" component={this.state.showHeaders ? NavBar : null} /> */}
        {this.state.showHeaders ? <NavBar /> : null}
        <Route exact path="/resume/print" render={() => {
          return <Print hideHeaders={this.hideHeaders} showHeaders={this.showHeaders}/>}} />
          <Route exact path="/resume" hideHeaders={this.hideHeaders} showHeaders={this.showHeaders} render={Resume}></Route>
          <Route exact path="/current-project" render={Resume}></Route>
          <Route exact path="/web" component={WebPortfolio}></Route>
          <Route exact path="/media" component={MediaPortfolio}></Route>
          <Route exact path="/" render={() => <Home openAuth={this.openAuth} />} ></Route>
          { this.props.state.githubData.map(project => {
          return <Route key={project.name} path={`/${project.name}`} 
                    render={(project2) => {
                      console.log(project2)
            return (
             <Website name={project.name} key={project.name} hideHeaders={this.hideHeaders} showHeaders={this.showHeaders} />
            )
            }}></Route>
          })}
          {this.state.showHeaders ? <Footer /> : null}
        {/* <Route path="/" component={this.state.showHeaders ? Footer : null} /> */}

      </AppDiv>
    );
  }
}

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
  connnectGithub, 
  getTime
}

export default
DragDropContext(HTML5Backend)(
withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)));