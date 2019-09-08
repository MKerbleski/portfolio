import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from '../components';
import {connect} from 'react-redux';
import axios from 'axios'

const tracker = []

class Home extends React.Component {
  state = {
    count: 0,
  }

  componentWillMount = () => {
    const log = {
      time: Date.now(),
      action: 'mount',
      component: 'home'
    }
    tracker.push(log)
  }

  startFade = (e) => {
    e.target.hidden = true
    
    const log = {
      time: Date.now(),
      action: `Count: ${this.state.count+1}`,
      component: 'home'
    }
    tracker.push(log)
    this.setState({count: this.state.count+1})
  }

  componentWillUnmount = () => {
    const log = {
      time: Date.now(),
      action: 'unmount',
      component: 'home'
    }
    tracker.push(log)
  }

  componentWillUpdate(){
    console.log('update', this.state.count)
    if(this.state.count >= 4 ){
      axios.post('http://localhost:4000/portfolio', {tracker}).then(res => {
        console.log('res', res)
        axios.get('http://localhost:4000/portfolio').then(res => {
          console.log('res', res)
        }).catch(err => {
          console.log('err', err)
        })
      }).catch(err => {
        console.log('err', err)
      })
    }
  }

  render(){
    console.log('tracker', tracker)
      return (
        <HomeDiv style={{alignItems: `${this.state.count ===5 ? 'center': null}`}}>
          <h1 onMouseLeave={(e) => this.startFade(e)} className="dark name">MICHAEL</h1>
          <h1 onMouseLeave={(e) => this.startFade(e)} className="white name">KERBLE.SKI</h1>
          <div className="all-links">
            <Link onMouseLeave={(e) => this.startFade(e)} className="link" to="/resume">resume</Link>
            <Link onMouseLeave={(e) => this.startFade(e)} className="link" to="/web">web</Link>
            <Link onMouseLeave={(e) => this.startFade(e)} className="link" to="/media">media</Link>
          </div>
          {this.state.count === 5 && <iframe height="90%" width="90%" src="https://www.youtube.com/embed/rweNNtFJAEk" frameBorder="0" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
        </HomeDiv>
      )
  }
}


// const mapStateToProps = store => {
//   return {store: store};
// }

// const mapDispatchToProps = {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home;

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
