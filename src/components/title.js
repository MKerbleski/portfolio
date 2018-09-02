import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import easterEggPic from '../img/easter-egg.png';

class Title extends React.Component {
  constructor(){
    super();
    this.state = {
      mikeHover: false,
      kerbleskiHover: false,
      allHover: false,
    }
  }

  mikeHover = e => {
    // e.preventDefault();
    this.setState({
      mikeHover: true,
      kerbleskiHover: false,
      allHover: true,
    })
  }

  kerbleskiHover = e => {
    // e.preventDefault();
    this.setState({
      mikeHover: false,
      kerbleskiHover: true,
      allHover: true,
    })
  }

  mikerbleskiHoverEnter = e => {
    // e.preventDefault();
    this.setState({
      mikeHover: false,
      kerbleskiHover: false,
      allHover: true,
    })
  }
  mikerbleskiHoverLeave = e => {
    // e.preventDefault();
    this.setState({
      mikeHover: false,
      kerbleskiHover: false,
      allHover: false,
    })
  }

 render(){
   return (
     <TitleDiv>
         <Link onMouseEnter={this.mikerbleskiHoverEnter}
         onMouseLeave={this.mikerbleskiHoverLeave} className="link" to="">
           <h1>
             <span
               onMouseOver={this.mikeHover}  className={(this.state.mikeHover) ?
                  ("mi underline") :
                  ("mi")}>MI
                </span>
             <span
               className={(this.state.allHover)?
                  ("ke underline") :
                  ("ke")}>KE
             </span>
            <span
              onMouseOver={this.kerbleskiHover}
              className={(this.state.kerbleskiHover)?
                 ("rbleski underline") :
                 ("rbleski")} >
                   RBLE
                   {/* <Link className="link"  to="/egg"> */}
                   <img src={easterEggPic} alt='' />
                   {/* </Link> */}
                   SKI
             </span>
           </h1>
             {/* https://www.w3schools.com/howto/howto_js_draggable.asp */}
         </Link>
         <div className="badUL"></div>
       </TitleDiv>
   )
 }
}

export default Title;

const TitleDiv = styled.div`
  ${'' /* border: 1px solid blue; */}
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 4vw;
  font-weight: 500;
  text-decoration: none;
  margin: 0;
  padding: 0;
.badUL {
  width: 100%;
  height: 3px;
  color: black;
}
  .ke {
    color: black;
    .underline {
     &:hover{
       text-decoration: underline;
     }
  }

  }
  .underline {
   &:hover{
     text-decoration: underline;
   }
  }
  .hidden{
    visibility: hidden;
  }
  img{
    height: 15px;
    &:hover{
      cursor: default;
    }
  }
  .link {
    text-decoration: none;
    ${'' /* position: absolute; */}
    &:visited{
      color: black;
    }
  }
  h1 {
    margin: 10px;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-decoration: none;
    &:visited{
      text-decoration: none;
    }

  }
`;
