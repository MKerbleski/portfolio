import React from 'react';
import styled from 'styled-components';

const Title = () => {
   return (
     <TitleDiv>
          <h1 className="dark name">MICHAEL</h1>
          <h1 className="white name">KERBLE.SKI</h1>
      </TitleDiv>
   )
}

export default Title;

const TitleDiv = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  font-size: 4vw;
  text-decoration: none;
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
  .name {
    margin: 0;
    font-weight: 900;
  }
  .dark {
    letter-spacing: 1rem;
    color: black;
  }
  .white {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: white;
    text-decoration: none;
  }
  h1{line-height: 0.88}
`;
