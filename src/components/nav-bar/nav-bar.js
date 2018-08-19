import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
// import Title from './title.js';
import AllContactTabs from './all-contact-tabs.js';
import styled from 'styled-components';
import Title from '../title';

const NavBarDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  box-sizing: border-box;
  width: 100%;
  background: white;
  padding: 15px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 .nav-left{
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 50%;
   border: 1px solid red;
   font-size: 35px;
 }
`;

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    return (
      <NavBarDiv>
          <div className="nav-left">
            {(window.location.pathname !== "/") ?
            <Title /> :
            <Link to="/">
              <i class="fas fa-bars"></i>
            </Link>
            }
          </div>
          <AllContactTabs />
      </NavBarDiv>
    )
  }
}

export default NavBar;

// https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiChbONrurcAhXph1QKHQV1C-YQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHamburger_button&psig=AOvVaw1lPUakx0rOZ_UdjtUlNNV9&ust=1534261092973887
