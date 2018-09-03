import React from 'react';
// import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const AllContactTabsDiv = styled.div`
  ${'' /* border: 1px solid red; */}
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
    font-size: 30px;
    margin: 4px;
    color: black;
  }
`;

const AllContactTabs = () => {
  return (
    <AllContactTabsDiv>
      <a className="logo" target="_blank" rel="noopener noreferrer" href="https://angel.co/kerbleski"><i className="fab fa-angellist"></i></a>
      <a className="logo" target="_blank" rel="noopener noreferrer" href="https://twitter.com/kerbleski"><i className="fab fa-twitter"></i></a>
      <a className="logo" target="_blank" rel="noopener noreferrer" href="https://github.com/mkerbleski"><i className="fab fa-github"></i></a>
      <a className="logo" target="_blank" rel="noopener noreferrer" href="https://500px.com/mkerbleski"><i className="fab fa-500px"></i></a>
      <a className="logo" target="_blank" rel="noopener noreferrer" href="https://vimeo.com/mkerbleski"><i className="fab fa-vimeo"></i></a>
      <a className="logo" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/mkerbleski"><i className="fab fa-linkedin"></i></a>
    </AllContactTabsDiv>
  )
}

export default AllContactTabs;
