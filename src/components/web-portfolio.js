import React from 'react';
import styled from 'styled-components';
import {connnectGithub} from './../actions';
import {connect} from 'react-redux';


const PortfolioDiv = styled.div`
  border: 1px solid red;
  ${'' /* height: 100%; */}
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
    max-height: 900px;
  }
  .mini-site {
    border: 1px solid blue;
    width: 80%;
    height: 800px;
  }
`;

class WebPortfolio extends React.Component {
  componentDidMount(){
   this.props.connnectGithub();

  }
  render(){
    console.log(this.props.state)
    return (
          <PortfolioDiv>
            {(this.props.state.fetchedData === true) ?        (this.props.state.githubData.data.map( (project) => {
              return (
                <div className="site-div">
                   <h1>{project.name}</h1>
                   <p>{project.updated_at}</p>
                   <p>description</p>
                  {(project.has_pages === false) ? null : <iframe title={project.id} className="mini-site" src={`https://mkerbleski.github.io/${project.name}/`}></iframe> }
                </div>
              )
            })) : null}
            <div className="site-div">
              <h1>title</h1>
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
