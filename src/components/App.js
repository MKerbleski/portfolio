import React from 'react';
import '../css/index.css';
import {Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {connnectGithub, getTime} from './../actions';
import { withRouter } from 'react-router'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

<<<<<<< HEAD
import Resume from './resume';
import WebPortfolio from './web-portfolio';
import MediaPortfolio from './media-portfolio';
import FullScreen from './fullscreen.js';
import Home from './home';
import NavBar from './nav-bar/nav-bar';
import Footer from './footer';
import Portfolioo from './portfolioo.js'
=======
import Resume from './portfolio/resume';
// import WebPortfolio from './portfolio/web-portfolio';
// import MediaPortfolio from './portfolio/media-portfolio';
// import Home from './portfolio/home';
// import NavBar from './portfolio/nav-bar/nav-bar';
// import Footer from './portfolio/footer';
import Pages from './pages/pages';
import Portfolio from './portfolio/portfolio';
>>>>>>> edc8531290cea9b06af6cb67d202268eef2e2b6b

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: '',
      showHeaders: true,
    }
  }

  componentDidMount(props) {
    this.props.connnectGithub();
    this.setState({
      showHeaders: true,
    })
  }

  openAuth(){
    console.log('openAuth')
  };

  hideHeaders = () => {
    this.setState({
      showHeaders: false,
    })
  }

  render() {
    console.log(this.state)
    
    return (
      <AppDiv>
<<<<<<< HEAD
        {/* <Route path="/portfolioo" props={this.props} render={Portfolioo} />
        <Route exact path="/" render={() => {
          return (<Redirect to="/portfolioo" />)
        }} /> */}
        <Route path="/" component={this.state.showHeaders ? NavBar : null} />
        {/* <NavBar openAuth={this.openAuth} props="props" /> */}
          <Route exact path="/resume" render={Resume}></Route>
          <Route exact path="/current-project" render={Resume}></Route>
          <Route exact path="/web-portfolio" component={WebPortfolio}></Route>
          <Route exact path="/media-portfolio" component={MediaPortfolio}></Route>
          <Route exact path="/" render={() => <Home openAuth={this.openAuth} />} ></Route>
          <Route path="/" component={this.state.showHeaders ? Footer : null} />
        
          {/* <Footer date={this.props.state.time} lastUpdate={this.props.state.lastUpdate} /> */}

        {this.props.state.githubData.map(project => {
          return <Route 
                    exact 
                    path={`/${project.name}`} 
                    render={(project2) => {

                      
            return (
              <FullScreen hideHeaders={this.hideHeaders} name={project.name}/>
            )}}></Route>
        })}
=======
        <Route path="/" component={Portfolio} />
        <Route path="/websites" component={Pages} />
>>>>>>> edc8531290cea9b06af6cb67d202268eef2e2b6b
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
  connnectGithub, 
  getTime
}

export default
DragDropContext(HTML5Backend)(
withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)));

          {/* <NavBar openAuth={this.openAuth} props="props" />
        <Route exact path="/resume" render={Resume}></Route>
        <Route exact path="/current-project" render={Resume}></Route>
        <Route exact path="/web" component={WebPortfolio}></Route>
        <Route exact path="/media" component={MediaPortfolio}></Route>
        <Route exact path="/" render={() => <Home openAuth={this.openAuth} />} ></Route>
        <Footer date={this.props.state.time} lastUpdate={this.props.state.lastUpdate} /> */}