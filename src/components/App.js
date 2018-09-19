import React, {Redirect} from 'react';
import '../css/index.css';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {connnectGithub, getTime} from './../actions';
import { withRouter } from 'react-router'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Pages from './pages/pages';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: ''
    }
  }

  componentDidMount(){
  //  this.props.connnectGithub();
  //  this.props.getTime();
  }

  openAuth(){
    console.log('openAuth')
  };

  render(props) {
    console.log(this.state)

      return (
        <AppDiv>
          <Route path='/' component={Pages}></Route>
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
  // connnectGithub, 
  // getTime
}

export default
DragDropContext(HTML5Backend)(
withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)));
