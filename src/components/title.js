import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const Title = () => {
  return (
    <TitleDiv>
      <Link className="link" to="/">
        <h1>
          <mi>MI</mi>
          <ke>KE</ke>RBLE.<img src="../img/easter-egg.png" alt='' />SKI</h1>
      </Link>
    </TitleDiv>
  )
}

export default Title;

const TitleDiv = styled.div`
  ${'' /* border: 1px solid blue; */}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  text-decoration: none;
  margin: 0;
  padding: 0;
  .link {
    text-decoration: none;
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
    ke {
      color: black;
    }
  }
`;
