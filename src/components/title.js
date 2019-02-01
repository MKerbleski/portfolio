import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Ball from './ball';

const Title = (props) => {
   return (
     <TitleDiv>
         <Link className="link" to="">
           <h1>
             <span className="mi">MI</span>
             <span className="ke">KE</span>
            <span>RBLE
              <span className="ball">
              {/* <Ball /> */}
              </span>
                   .SKI
             </span>
           </h1>
            {/* https://www.w3schools.com/howto/howto_js_draggable.asp */}
         </Link>
         <div className="badUL"></div>
       </TitleDiv>
   )
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
  img{
    height: 15px;
    &:hover{
      cursor: default;
    }
  }
  .link {
    text-decoration: none;
    &:visited{
      color: black;
    }
    &:hover{
      cursor: default;
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
  .ball {
    &:hover{
      cursor: grab;
    }
  }
`;
