import React, {Component} from 'react';
import styled from 'styled-components';

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
    height: 90vh;
  }
  .media {
    border: 1px solid blue;
    width: 90%;
    height: 90%;
    text-align: center;
  }
  .mediaBin {
    border: 1px solid blue;
    width: 100%;
    height: 90%;
    text-align: center;
  }
  .video {
    border: 1px solid red;
    margin: 10px;
    padding: 10px;
  }
`;

const MediaPortfolio = () => {
  return (
    <PortfolioDiv>

        <h1>Virtual Reality at Tonto National Monument</h1>
        <div className="mediaBin">
          <iframe className="media" src="http://swvirtualmuseum.nau.edu/wp/Tonto_panos/Tonto-NM-pano-tour.html"></iframe>
          <a href="http://swvirtualmuseum.nau.edu/wp/Tonto_panos/Tonto-NM-pano-tour.html">
          open fullscreen</a>
          <p>Note: There are errors with this website. I contributed the audio, photo, and videos displayed throughout the site and set up the interactive part with a seperate program. I was not responsible for anything relating to the publishing of the site or the errors that render. </p>


        <div className="video media">
          <iframe src="https://player.vimeo.com/video/214381757" width="100%" height="80%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <p><a href="https://vimeo.com/214381757">Canada Play in 360 Womens Basketball</a> from <a href="https://vimeo.com/mkerbleski">Michael Kerbleski</a>.</p>
        </div>

      </div>

    </PortfolioDiv>
  )
}

export default MediaPortfolio;
