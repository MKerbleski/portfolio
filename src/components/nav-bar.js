import React from 'react';
import {Route, Link} from 'react-router-dom';
import Title from './title.js';
import AllContactTabs from './all-contact-tabs.js';
import styled from 'styled-components';

const NavBarDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  box-sizing: border-box;
  width: 100%;
  background: white;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 .nav-title{
   width: 25%;
 }
`;

const NavBar = () => {
  return (
    <NavBarDiv>
        {/* if not home path then display Title */}
        <div className="nav-title">
          <Title />
        </div>
        <AllContactTabs />
    </NavBarDiv>
  )
}

export default NavBar;
