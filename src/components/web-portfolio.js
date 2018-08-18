import React from 'react';
import styled from 'styled-components';

const PortfolioDiv = styled.div`
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .site-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid green;
    width: 90%;
    height: 90%;
  }
  .mini-site {
    border: 1px solid blue;
    width: 80%;
    height: 80%;
  }
`;

const WebPortfolio = () => {
  return (
        <PortfolioDiv>
          <div className="site-div">
            <h1>title</h1>
            <p>date</p>
            <p>description</p>
            <a href="https://mkerbleski.github.io/Sprint-Challenge-Applied-Javascript/">fullscreen</a>
            <iframe className="mini-site" src="https://mkerbleski.github.io/Sprint-Challenge-Applied-Javascript/"></iframe>
          </div>
        </PortfolioDiv>
  )
}

export default WebPortfolio;
