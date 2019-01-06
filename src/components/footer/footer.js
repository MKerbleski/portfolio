import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios'

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: null
    }
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/repos/mkerbleski/portfolio').then(res => {
      this.setState({
        time: res.data.updated_at,
      }) 
    }).catch(err => {
      console.log(err)
      this.setState({
        time: null,
      })
    })
  }
  
  render(){
    return (
      <FooterDiv>
        <div className="top">
          <div className="copyright">Copyright: Michael Kerbleski</div>
          {this.state.time ? <div className="last-update">Last Update: {moment(this.state.time).fromNow()}</div> : null}
        </div>
      </FooterDiv>
    )
  }
}

export default Footer;

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
      box-sizing: border-box;
      display: flex;
    }
  }
`;


{/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div> */}