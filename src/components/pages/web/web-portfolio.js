import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import {connnectGithub} from './../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import { web } from './webObj'

class WebPortfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      currentProjectID: null,
      currentProject: null,
    }
  }

  componentDidMount(){
    // this.props.connnectGithub();
  }

  selectSite = e => {
    e.preventDefault();
    this.setState({
      currentProjectID: e.target.id,
      currentProject: this.props.state.githubData.find(project => +project.id === +e.target.id)
    })
  }

  render(){
    return (
      <PortfolioDiv>
      {web.map(item => {
        return <div className="web-tile">
            <h1><a href={item.link}>{item.name}</a></h1>
        </div>
      })}
      </PortfolioDiv>
    )
  }
}

// export default WebPortfolio;

const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {
  // connnectGithub
}

export default connect(mapStateToProps, mapDispatchToProps)(WebPortfolio);

const PortfolioDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  /* height: 99.5vh; */
  overflow: auto;
  flex-wrap: wrap;
  .web-tile{
    border: 1px solid red;
    width: 100%;
  }
`;