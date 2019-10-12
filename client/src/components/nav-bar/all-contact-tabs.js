import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateLogs } from '../../redux/actions.js'

class AllContactTabs extends React.Component {
  trackClick(name){
    const log = {
      time: Date.now(),
      action: `click`,
      component: `${name}`
    }
    this.props.updateLogs(log)
  }

  render(){
    return (
      <AllContactTabsDiv>
      <a onClick={(e) => this.trackClick('github')} className="logo" target="_blank" rel="noopener noreferrer" href="https://github.com/mkerbleski">
        <i className="fab fa-github"></i>
      </a>
      <a onClick={(e) => this.trackClick('linkedin')} className="logo" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mkerbleski">
        <i className="fab fa-linkedin"></i>
      </a>
      <a onClick={(e) => this.trackClick('twitter')} name="twitter" className="logo" target="_blank" rel="noopener noreferrer" href="https://twitter.com/kerbleski">
        <i className="fab fa-twitter"></i>
      </a>
      <a onClick={(e) => this.trackClick('500px')} className="logo" target="_blank" rel="noopener noreferrer" href="https://500px.com/mkerbleski">
        <i className="fab fa-500px"></i>
      </a>
      <a onClick={(e) => this.trackClick('vimeo')} className="logo" target="_blank" rel="noopener noreferrer" href="https://vimeo.com/mkerbleski">
        <i className="fab fa-vimeo"></i>
      </a>
      <a onClick={(e) => this.trackClick('medium')} className="logo" target="_blank" rel="noopener noreferrer" href="https://medium.com/@kerbleski">
        <i className="fab fa-medium"></i>
      </a>
      <a onClick={(e) => this.trackClick('angel')} className="logo" target="_blank" rel="noopener noreferrer" href="https://angel.co/kerbleski">
        <i className="fab fa-angellist"></i>
      </a>
    </AllContactTabsDiv>
  )
}
}

const mapStateToProps = state => {
  return {state};
}

export default connect(mapStateToProps, {updateLogs})(AllContactTabs)

const AllContactTabsDiv = styled.div`
    ${'' /* border: 1px solid red; */}
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    .logo {
        box-sizing: border-box;
        cursor: pointer;
        font-size: 30px;
        margin: 4px;
        color: black;
    }
`;