import React from 'react';
import styled from 'styled-components';

const PortfolioDiv = styled.div`
  background: green;
  width: 100px;
  height: 100px;
`;

const WebPortfolio = () => {
  return (
    <div className="web-portfolio-div">
        <h1>portfolio</h1>
        <PortfolioDiv></PortfolioDiv>
    </div>
  )
}

export default WebPortfolio;
