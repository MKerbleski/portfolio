import React from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const TitleDiv = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  text-decoration: none;
  ${'' /* font-size: 13vw; */}
  margin: 0;
  padding: 0;
  h1 {
    ${'' /* font-size: 13vw; */}
    margin: 10px;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    text-decoration: none;
    ke {
      color: black;
    }
  }
`;

const Title = () => {
  return (<Link to="/">
    <TitleDiv>
      <h1>
        <mi>MI</mi>
        <ke>KE</ke>RBLE.SKI</h1>
    </TitleDiv>
  </Link>)
}

export default Title;
