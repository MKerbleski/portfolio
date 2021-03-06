import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const TitleTop = () => {
  return (
    <TitleDiv>
        <Link className="link" to="">
          <h1>
            {/* <mi>MI</mi>
            <ke>KE</ke> */}
            {/* <span className="mi">MI</span> */}
            {/* <span className="ke">KE</span> */}
            KERBLE.SKI</h1>
            {/* https://www.w3schools.com/howto/howto_js_draggable.asp */}
        </Link>
      </TitleDiv>
  )
}

export default TitleTop;

const TitleDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 1.5vw;
  font-weight: 500;
  text-decoration: none;
  margin: 0;
  padding: 0;
  &:hover {
    cursor: default;
  }
  .link {
    text-decoration: none;
    ${'' /* position: absolute; */}
    &:visited{
      color: black;
    }
  }
  h1 {
    margin: 5px 12px;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-decoration: none;
    &:visited{
      text-decoration: none;
    }
    ke {
      color: black;
    }
  }
  .ke {
    color: black;
    .underline {
      &:hover{
        text-decoration: underline;
      }
    }
  }
`;
