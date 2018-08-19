import React from 'react';
import styled from 'styled-components';
import {connnectGithub} from './../actions';
import {connect} from 'react-redux';


const PortfolioDiv = styled.div`
  border: 1px solid red;
  ${'' /* height: 100%; */}
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  .project-list {
    border: 1px solid green;
    width: 30%;
    max-height: 1000px;
    overflow: auto;
  }
  .site-name {
    background-color: gray;
  }
  .selected-site {
    background-color: red;
  }
  .site-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid green;
    width: 90%;
    max-height: 900px;
  }
  .mini-site {
    border: 1px solid blue;
    width: 80%;
    height: 800px;
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
   this.setState({

   })
  }

  selectSite = e => {
    e.preventDefault();
    this.setState({
      currentProjectID: e.target.id,
      currentProject: this.props.state.githubData.data.filter(project => project.id == e.target.id
      )
    })
  }

  render(){
    return (
      <PortfolioDiv>
        <div className="project-list">
          <h4>List of Projects</h4>
          {(this.props.state.fetchedData === true) ? (this.props.state.githubData.data.map( (project) => {
            return (
              <div key={project.id} className={(this.state.currentProjectID == project.id) ? ('site-name selected-site') : ('site-name')} >
                 <h1>{project.name}</h1>
                 {(project.has_pages) ? (<p>Live preview!</p>) : null}
                 <p id={project.id} onClick={this.selectSite}>show</p>
              </div>
            )
          })) : null}
        </div>

        {(this.state.currentProjectID) ? (
          <div className="site-div">
            <h1>{this.state.currentProject[0].name}</h1>
            <p>Created at:{this.state.currentProject[0].created_at}</p>
            <p>Last Updated:{this.state.currentProject[0].updated_at}</p>
            <p>{this.state.currentProject[0].size}</p>
            {(this.state.currentProject[0].has_pages) ? (<iframe title="title" className="mini-site" src={`https://mkerbleski.github.io/${this.state.currentProject[0].name}/`}></iframe>) : null}
          </div>) : (
            <p>Select a project to see details.</p>)}

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
