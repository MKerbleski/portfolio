import React from 'react';
import styled from 'styled-components';
import { media } from '../data/mediaObj'
import WebTile from '../components/web-tile'

class WebPortfolio extends React.Component {
  render(){
    return (
      <PortfolioDiv>
        {media.map(item => {
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