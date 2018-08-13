import React from 'react';
import {Route, Link} from 'react-router-dom';
import Title from './title.js';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeDiv>
      <Title />
      <div className="all-links">
        <Link className="link" to="/resume">resume</Link>
        <Link className="link" to="/current-project">current-project</Link>
        <Link className="link" to="/web-portfolio">web-portfolio</Link>
        <Link className="link" to="/media-portfolio">media-portfolio</Link>
      </div>
    </HomeDiv>
  )
}

export default Home;

const HomeDiv = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  height: 99.5vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    font-size: 13vw;
  }
  .all-links {
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    .link {
      border: 1px solid red;
      margin: 0 3px;
      padding: 3px;
      color: black;
      font-size: 18px;
      text-decoration: none;
      font-weight: bold;
      border-radius: 3px;
      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
`;