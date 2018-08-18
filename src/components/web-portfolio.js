import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {connnectGithub} from './../actions';

const PortfolioDiv = styled.div`
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .site-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid green;
    width: 90%;
    height: 90%;
  }
  .mini-site {
    border: 1px solid blue;
    width: 80%;
    height: 80%;
  }
`;

class WebPortfolio extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isCalled: false
      }
    }

    render(){
      return (
            <PortfolioDiv>
              <div className="site-div">
                <h1>title</h1>
                <p>date</p>
                <p>description</p>
                <a href="https://mkerbleski.github.io/Sprint-Challenge-Applied-Javascript/">fullscreen</a>
                {/* <iframe title="e" className="mini-site" src="https://mkerbleski.github.io/Sprint-Challenge-Applied-Javascript/"></iframe> */}
              </div>
            </PortfolioDiv>
      )
    }
}

const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {
  connnectGithub
}

export default connect(mapStateToProps, mapDispatchToProps)(WebPortfolio);
