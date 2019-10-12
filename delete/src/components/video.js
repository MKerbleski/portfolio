import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { updateLogs } from '../redux/actions.js.js'

class Video extends React.Component {

  componentWillMount = () => {
    const log = {
      time: Date.now(),
      action: 'mount',
      component: 'video'
    }
    this.props.updateLogs(log)
  }

  trackVideo = (action) => {
    const log = {
      time: Date.now(),
      action: `${action}`,
      component: 'video'
    }
    this.props.updateLogs(log)
  }

  render(){
      return (
        <VideoDiv
            onClick={(e) => this.trackVideo('click')}
            onMouseEnter={(e) => this.trackVideo('enter')} 
            onMouseLeave={(e) => this.trackVideo('exit')} 
            height="90%" 
            width="90%" 
            src="https://www.youtube.com/embed/rweNNtFJAEk" 
            frameBorder="0" 
            allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </VideoDiv>
      )
  }
}


const mapStateToProps = state => {
  return {state};
}

export default connect(mapStateToProps, {updateLogs})(Video)
// export default Video;

const VideoDiv = styled.iframe`

  
`;
