import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import {connnectGithub} from './../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import { web } from './webObj'

class WebPortfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      currentProjectID: null,
      currentProject: null,
    }
  }

  // selectSite = e => {
  //   e.preventDefault();
  //   this.setState({
  //     currentProjectID: e.target.id,
  //     currentProject: this.props.state.githubData.find(project => +project.id === +e.target.id)
  //   })
  // }

  render(){
    return (
      <PortfolioDiv>
        {web.map(item => {
          <WebTile item={item} />
        })}
      </PortfolioDiv>
    )
  }
}

export default WebPortfolio;

const PortfolioDiv = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    overflow: auto;
    flex-wrap: wrap;
`;