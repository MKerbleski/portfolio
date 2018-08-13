import React from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const AllContactTabsDiv = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  .logo {
    box-sizing: border-box;
    cursor: pointer;
    font-size: 35px;
    color: black;
  }
`;

const AllContactTabs = () => {
  return (
    <AllContactTabsDiv>
      <div className="logo" href="https://angel.co/kerbleski"><i class="fab fa-angellist"></i></div>
      <div className="logo" href="https://twitter.com/kerbleski"><i class="fab fa-twitter"></i></div>
      <div className="logo" href="https://github.com/kerbleski"><i class="fab fa-github"></i></div>
      --
      <div className="logo">&#9728;</div>
      <div className="logo">&#9790;</div>
    </AllContactTabsDiv>
  )
}

export default AllContactTabs;
