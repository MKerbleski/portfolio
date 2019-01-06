import React from 'react';
import styled from 'styled-components';
import { web } from './webObj'
import WebTile from './web-tile'

class WebPortfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      currentProjectID: null,
      currentProject: null,
    }
  }

  render(){
    return (
      <PortfolioDiv>
        {web.map(item => {
          return <WebTile item={item} picture={item.picture} />
        })}
      </PortfolioDiv>
    )
  }
}

export default WebPortfolio;

const PortfolioDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    overflow: auto;
    flex-wrap: wrap;
`;