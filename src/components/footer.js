import React from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
const FooterDiv = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  font-size: 12px;
  padding: 5px 0;
  background: white;
`;


const Footer = () => {
  return (
    <FooterDiv>
      <div className="copyright">Copyright: Michael Kerbleski</div>
      <div className="last-update">Last Update:{}</div>
    </FooterDiv>
  )
}

export default Footer;
