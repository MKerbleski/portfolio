import React from 'react';
// import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import {getTime} from '../../actions';
import {connect} from 'react-redux';


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

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      // time: this.props.date.updated_at,
    }
  }

  componentDidMount() {
    this.props.getTime();
  }

  changeTime = () => {
    this.setState({
      time: moment(this.state.updated_at).fromNow(),
    })
  }

  render(){
    return (
      <FooterDiv>
        <div className="top">
          {/* <div className="logo">&#9728;</div> */}
          <div className="copyright">Copyright: Michael Kerbleski</div>
          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div> */}
          <div className="last-update">Last Update: {moment(this.state.updated_at).fromNow()}</div>
        </div>
      </FooterDiv>
    )
  }
}

const mapStateToProps = store => {
  return {state: store};
}

const mapDispatchToProps = {
  getTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
