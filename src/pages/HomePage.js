import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from '../components';

class Home extends React.Component {
  render(){
      return (
        <HomeDiv>
          <Title openAuth={this.props.openAuth} />
          <div className="all-links">
            <Link className="link" to="/resume">resume</Link>
            <Link className="link" to="/web">web</Link>
            <Link className="link" to="/media">media</Link>
            {/* <Link className="link" to="/blog">blog</Link> */}
            {/* <a className="link" rel="noopener noreferrer" target="_blank" href="https://kerbleski.webflow.io">blog</a>  */}
          </div>
        </HomeDiv>
      )
  }
}

export default Home;

const HomeDiv = styled.div`
  box-sizing: border-box;
  height: 99.5vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  h1 {
    font-size: 13vw;
  }
  @media (max-width: 760px){
      flex-direction: column;
      justify-content: flex-start;
      /* align-items: center; */
      margin-top: 200px;
  }
  .all-links {
    ${'' /* border: 1px solid green; */}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    /* @media (max-width: 760px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } */
    .link {
      ${'' /* border: 1px solid red; */}
      margin: 0 3px;
      padding: 0 3%;
      color: black;
      font-size: 18px;
      text-decoration: none;
      font-weight: bold;
      border-radius: 3px;
      &:hover {
        ${'' /* color: white;
        background-color: black; */}
        text-decoration: underline;
      }
      /* @media (max-width: 760px){
            margin: 20px;
        } */
    }
  }
  
`;
