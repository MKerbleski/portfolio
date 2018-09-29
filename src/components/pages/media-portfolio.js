import React from 'react';
import styled from 'styled-components';
import {connnectGithub} from '../../actions';
import {connect} from 'react-redux';


class MediaPortfolio extends React.Component {
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
      currentProject: this.props.state.githubData.filter(project => +project.id === +e.target.id
      )
//change to find and it wont return an array maybe

    })
  }

  render(){
    return (
      <PortfolioDiv>
        <div className="project-list">
          <div className="project">
          <iframe className="media" title="Timelapse" src="https://player.vimeo.com/214206963" width="100%" height="80%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <div className="project">
            <iframe title="Tonto VR" className="media" src="http://swvirtualmuseum.nau.edu/wp/Tonto_panos/Tonto-NM-pano-tour.html"></iframe>
            <h4>Tonto National Monument Virtual Tour</h4>
            <p>Captured photo audio and video, and compiled website</p>
          
          </div>
          <div className="project">
          <iframe className="media" title="Basketball VR" src="https://player.vimeo.com/video/214381757" width="100%" height="80%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MediaPortfolio);
// 
// <h1>Virtual Reality at Tonto National Monument</h1>
// <div className="mediaBin">
// <iframe title="Tonto VR" className="media" src="http://swvirtualmuseum.nau.edu/wp/Tonto_panos/Tonto-NM-pano-tour.html"></iframe>
// <a href="http://swvirtualmuseum.nau.edu/wp/Tonto_panos/Tonto-NM-pano-tour.html">
// open fullscreen</a>
// <p>Note: There are errors with this website. I contributed the audio, photo, and videos displayed throughout the site and set up the interactive part with a seperate program. I was not responsible for anything relating to the publishing of the site or the errors that render. </p>
//
//
// <div className="video media">
// <iframe title="Basketball VR" src="https://player.vimeo.com/video/214381757" width="100%" height="80%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// <p><a href="https://vimeo.com/214381757">Canada Play in 360 Womens Basketball</a> from <a href="https://vimeo.com/mkerbleski">Michael Kerbleski</a>.</p>
// </div>
//
// </div>


const PortfolioDiv = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 99.5vh;
  width: 100vw;
  padding: 10px;
  .project-list{
    width: 100%;
    .project{
    border: 1px solid red;
    width: 100%;
    .media{
      width: 100%;
      height: 400px;
    }
  }
  }
  
`;