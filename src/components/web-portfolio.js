import React from 'react';
import styled from 'styled-components';
import {connnectGithub} from './../actions';
import {connect} from 'react-redux';


const PortfolioDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  .project-list {
    ${'' /* border: 1px solid green; */}
    width: 30%;
    max-height: 1000px;
    overflow: auto;
  }
  .site-name {
    background-color: white;
    border: 1px solid black;
    text-align: center;
  }
  .selected-site {
    background-color: lightgray;
  }
  .site-div {
    ${'' /* border: 1px solid green; */}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 900px;
  }
  .mini-site {
    ${'' /* border: 1px solid blue; */}
    width: 95%;
    height: 800px;
    padding: 10px;
    -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow:         inset 0 0 10px #000000;
  }
`;

class WebPortfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      currentProjectID: null,
      currentProject: null,
    }
  }

  componentDidMount(){
   this.props.connnectGithub();

  }

  selectSite = e => {
    e.preventDefault();
    this.setState({
      currentProjectID: e.target.id,
      currentProject: this.props.state.githubData.filter(project => project.id == e.target.id
      )
//change to find and it wont return an array maybe

    })
  }

  render(){
    return (
      <PortfolioDiv>
        <div className="project-list">
          <h4>List of Projects</h4>
          {(this.props.state.fetchedData === true) ? (this.props.state.githubData.map( (project) => {
            return (
              <div key={project.id} className={(this.state.currentProjectID == project.id) ?
                ('site-name selected-site') :
                ('site-name')} >
                 <h3 id={project.id} onClick={this.selectSite}>{project.name}</h3>
                 {(project.has_pages) ? (
                   <p>Live preview!</p>) : null}
              </div>
            )
          })) :
          (<p>{this.props.state.status}</p>)}
        </div>

        <div className="site-div" >
          {(this.state.currentProjectID) ? (
            <div className="site-div">
              <h1>{this.state.currentProject[0].name}</h1>
              <p>Created at:{this.state.currentProject[0].created_at}</p>
              <p>Last Updated:{this.state.currentProject[0].updated_at}</p>
              <p>{this.state.currentProject[0].size}</p>
              {(this.state.currentProject[0].has_pages) ?
                (<iframe title="title" className="mini-site" src={`https://mkerbleski.github.io/${this.state.currentProject[0].name}/`}></iframe>) :
                null}
            </div>) :
             (<p>Select project for details.</p>)}
        </div>
      </PortfolioDiv>
    )
  }
}

// export default WebPortfolio;

const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {
  connnectGithub
}

export default connect(mapStateToProps, mapDispatchToProps)(WebPortfolio);
