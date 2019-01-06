import React from 'react';
import styled from 'styled-components';
import { web } from '../data/webObj'
import { WebTile } from '../components'

class WebPortfolio extends React.Component {
  render(){
    return (
      <PortfolioDiv>
        {web.map(item => {
          return <WebTile item={item} key={item.name} />
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