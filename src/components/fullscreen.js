import React from 'react';
import styled from 'styled-components';
import {connnectGithub} from './../actions';
import {connect} from 'react-redux';
import moment from 'moment';

const FullScreenDiv = styled.div`
  
`;

class FullScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        showHeaders: false,
    }
  }

  componentDidMount(){
    //set global headers to false 
    this.props.hideHeaders();
  }

  render(){
    return (
      <FullScreenDiv>
        <h2>fulscreen</h2>
        <iframe title="title" src={`https://mkerbleski.github.io/${this.props.name}/`}></iframe>
      </FullScreenDiv>
    )
  }
}

export default FullScreen;
