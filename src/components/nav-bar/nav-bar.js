import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import Title from './title.js';
import AllContactTabs from './all-contact-tabs.js';
import styled from 'styled-components';
import TitleTop from './titleTop';
import Basket from './basket';

const NavBarDiv = styled.div`
    ${'' /* border: 1px solid red; */}
    border-bottom: 1px solid black;
    box-sizing: border-box;
    width: 100%;
    background: white;
    padding: 5px 20px 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .nav-left{
        ${'' /* border: 1px solid red; */}
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 45%;
        &:visited{
          color: black;
        }
        .nav-title{
          ${'' /* font-size: 10vh; */}
        }
    }
`;

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render(props){
      return (
          <NavBarDiv>
                <div className="nav-left">
                  {(window.location.pathname !== "/") ?
                  <TitleTop className="nav-title" /> :
                  <Basket  />
                  }
                </div>
                <input placeholder="******" type="password"></input>
                <AllContactTabs />
          </NavBarDiv>
      )
  }
}

export default NavBar;

// https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiChbONrurcAhXph1QKHQV1C-YQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHamburger_button&psig=AOvVaw1lPUakx0rOZ_UdjtUlNNV9&ust=1534261092973887
