import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connnectGithub} from '../../actions';
import {connect} from 'react-redux';
import moment from 'moment';

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
      currentProject: this.props.state.githubData.find(project => +project.id === +e.target.id)
    })
  }

  render(){
    return (
      <PortfolioDiv>
        <div className="project-list">
          <h4>Projects</h4>
          {(this.props.state.fetchedData === true) ?
              (this.props.state.githubData.map( (project) => {
                return (
                  <div
                    key={project.id} className={
                      (+this.state.currentProjectID === +project.id) ?
                      ('site-name selected-site') :
                      ('site-name')} >
                     <h3 id={project.id} onClick={this.selectSite}>{project.name}</h3>
                  </div>
                )
              })) :
          (<p>{this.props.state.status}</p>)
        }
        </div>

        <div className="site-div" >

          {(this.state.currentProjectID) ? 
           (<div className="site-div">
              <h1>{this.state.currentProject.name}</h1>
              <p> Created:{moment(this.state.currentProject.created_at).fromNow()}</p>
              <p> Last Updated:{moment(this.state.currentProject.updated_at).fromNow()}</p>
              <p> {this.state.currentProject.description}</p>
              <Link to={`/${this.state.currentProject.name}`}>Fullscreen</Link>
              
              {(this.state.currentProject.has_pages) ?
               (<iframe title="title" className="mini-site" src={`https://mkerbleski.github.io/${this.state.currentProject.name}/`}></iframe>) :
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

const PortfolioDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 99.5vh;
  overflow: auto;
  .project-list {
    ${'' /* border: 1px solid green; */}
    width: 30%;
    max-height: 1000px;
    overflow: auto;
    .listButtons {
      border: 1px solid red;
      button {
        width: 50%;
      }
    }
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