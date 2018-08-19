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
   this.init();
  }

  init(){
    if (this.props.state.fetchedData === true) {
      this.setState({
        currentProjectID: 142026822,
      })
    }
  }

  componentDidUpdate = () => {



  }



  selectSite = e => {
    e.preventDefault();
    this.setState({
      currentProjectID: e.target.id,
      currentProject: this.props.state.githubData.data.filter(project => project.id ==e.target.id
      )
      //need to find a way to return the index of the array that matches the id
    })
    console.log(this.state)
  }

  render(){
    console.log(this.state.currentProject, "current project")
    return (
          <PortfolioDiv>
            <div className="project-list">
              <h4>List of Projects</h4>
              {(this.props.state.fetchedData === true) ? (this.props.state.githubData.data.map( (project) => {
                return (
                  <div key={project.id} className={(this.state.currentProjectID == project.id) ? ('site-name selected-site') : ('site-name')} >
                     <h1>{project.name}</h1>
                     <p>{project.updated_at}</p>
                     <p>{project.id}</p>
                     <p>description</p>
                     <p id={project.id} onClick={this.selectSite}>show</p>
                    {/* {(project.has_pages === false) ? <div>no page enabled</div> : <iframe title={project.id} className="mini-site" src={`https://mkerbleski.github.io/${project.name}/`}></iframe> } */}
                  </div>
                )
              })) : null}
            </div>

            <div className="site-div">

              <h1>{this.state.currentProjectID}</h1>
              <p>date</p>
              <p>description</p>
              <iframe title="title" className="mini-site" src="https://mkerbleski.github.io/Sprint-Challenge-Applied-Javascript/"></iframe>
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
