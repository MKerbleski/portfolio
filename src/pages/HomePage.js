import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import  Video  from '../components/video.js';
import { connect } from 'react-redux';
import { updateLogs } from '../redux/actions.js'
import { withRouter } from 'react-router'

class Home extends React.Component {
  state = {
    count: 0,
    video: false
  }

  componentWillMount = () => {
    const log = {
      time: Date.now(),
      action: 'enter',
      component: 'home'
    }
    this.props.updateLogs(log)
  }

  dropElement = (e, name) => {
    // e.target.hidden = true
    
    const log = {
      time: Date.now(),
      action: `hide`,
      component: `${e.target.name || name}`
    }
    this.props.updateLogs(log)
    // this.setState({count: this.state.count+1}, () => {
    //   if(this.state.count === 5){
    //     this.props.history.push('/demo')
    //   }
    // })
  }

  componentWillUnmount = () => {
    const log = {
      time: Date.now(),
      action: 'unmount',
      component: 'home'
    }
    this.props.updateLogs(log)
  }

  render(){
      return (
        <HomeDiv>
          <h1 onMouseLeave={(e) => this.dropElement(e, 'michael')} className="dark name">MICHAEL</h1>
          <h1 onMouseLeave={(e) => this.dropElement(e, 'kerbleski')} className="white name">KERBLE.SKI</h1>
          <div className="all-links">
            <Link name="resume" onMouseLeave={(e) => this.dropElement(e)} className="link" to="/resume">resume</Link>
            <Link name="web" onMouseLeave={(e) => this.dropElement(e)} className="link" to="/web">web</Link>
            <Link name="media" onMouseLeave={(e) => this.dropElement(e)}  className="link" to="/media">media</Link>
          </div>
        </HomeDiv>
      )
  }
}

const mapStateToProps = state => {
  return {state};
}

export default withRouter(connect(mapStateToProps, {updateLogs})(Home))

const HomeDiv = styled.div`
  box-sizing: border-box;
  height: 87vh;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  h1 {
    font-size: 13vw;
  }
  .name {
    margin: 0;
    font-weight: 900;
  }
  .dark {
    letter-spacing: 1rem;
    color: black;
  }
  .white {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: white;
    text-decoration: none;
  }
  h1{line-height: 0.88}
  @media (max-width: 760px){
      flex-direction: column;
      justify-content: flex-start;
      /* align-items: center; */
      margin-top: 200px;
  }
  .all-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 20px; */
    /* @media (max-width: 760px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } */
    .link {
      margin: 0 3px;
      padding: 0 .5%;
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
