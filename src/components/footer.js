import React from 'react';
// import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const FooterDiv = styled.div`
  ${'' /* border: 1px solid green; */}
  display: flex;
  flex-direction:column;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 5px 0;
  background: white;
  .top {
    box-sizing: border-box;
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin: 10px;
    .logo {
      font-size: 20px;
    }
    .last-update{
      display: flex;
      &:hover{
        border: 1px solid red;

      }
    }
  }
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.date.updated_at,
    }
  }

  changeTime = () => {
    this.setState({
      time: moment(this.props.date.updated_at).fromNow(),
    })
  }
  render(){
    return (
      <FooterDiv>
        <div className="top">
          {/* <div className="logo">&#9728;</div> */}
          <div className="copyright">Copyright: Michael Kerbleski</div>
          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div> */}
          <div className="last-update">Last Update: {moment(this.props.date.updated_at).fromNow()}</div>
        </div>
      </FooterDiv>
    )
  }
}

export default Footer;
