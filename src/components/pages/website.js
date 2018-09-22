import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TitleTop from '../nav-bar/titleTop.js';

import styled from 'styled-components';




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
      <div className="websiteReturn">
      <Link to={`/web`}> view on MIKERBLE.SKI</Link></div>
          <iframe title="title" className="fullscreen" src={`https://mkerbleski.github.io/${this.props.name}/`}></iframe>
      </WebSiteDiv>
    )
  }
}

export default Website;

const WebSiteDiv = styled.div`
  .fullscreen{
    width: 100%;
    height: 100vh;
  }
  .websiteReturn{
    ${'' /* border: 1px solid blue; */}
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;