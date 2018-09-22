import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import Title from './title.js';

import styled from 'styled-components';


const WebSiteDiv = styled.div`
.fullscreen{
  width: 100%;
  height: 100vh;
}
`;

class Website extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    console.log('CDM website')
    this.props.hideHeaders();
  }

  componentWillUnmount(){
    this.props.showHeaders();
  }

  render(props){
      console.log(props)
    return (
      <WebSiteDiv>
      <div>hi{this.props.name}</div>
          <iframe title="title" className="fullscreen" src={`https://mkerbleski.github.io/${this.props.name}/`}></iframe>
      </WebSiteDiv>
    )
  }
}

export default Website;

