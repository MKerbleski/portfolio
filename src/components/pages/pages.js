import React, {Redirect} from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {connnectGithub, getTime} from '../../actions';
import { withRouter } from 'react-router'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Portfolio from '../portfolio/portfolio';



class Pages extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: ''
    }
  }

  componentDidMount(){
   this.props.connnectGithub();
  }

  openAuth(){
    console.log('openAuth')
  };

  render() {
    console.log(this.state)
    return (
      <PagesDiv>
        <Route path='/' component={Portfolio}></Route>
        {this.props.state.githubData.map(project => {
          return <Route 
                    exact 
                    path={`/${project.name}`} 
                    render={(project2) => {
                      console.log(project2)
            return (
             (<iframe title="title" src={`https://mkerbleski.github.io/${project.name}/`}></iframe>) 
            )}}></Route>
        })}
      </PagesDiv>
    );
  }
}
// export default (Pages);

const PagesDiv = styled.div`
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
  connect(mapStateToProps, mapDispatchToProps)(Pages)));
