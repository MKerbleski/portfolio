import React from 'react';
import {Link, Route} from 'react-router-dom';
// import Title from './title.js';
import AllContactTabs from './all-contact-tabs.js';
import styled from 'styled-components';

const NavBarDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  box-sizing: border-box;
  width: 100%;
  background: white;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 .nav-left{
   width: 25%;
   ${'' /* border: 1px solid red; */}
   font-size: 35px;
 }
`;

const NavBar = () => {
  return (
    <NavBarDiv>
        {/* if not home path then display Title */}
        <div className="nav-left">
          {/* <Title /> */}
          <Route path="/">
            <i class="fas fa-bars"></i>
          </Route>
        </div>
        <AllContactTabs />
    </NavBarDiv>
  )
}

export default NavBar;

// https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiChbONrurcAhXph1QKHQV1C-YQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHamburger_button&psig=AOvVaw1lPUakx0rOZ_UdjtUlNNV9&ust=1534261092973887
