import React from 'react';
import styled from 'styled-components';
import { Intro, Education, Projects, Jobs } from './index'
import { connect } from 'react-redux';
import { updateLogs } from '../../redux/actions.js.js'

class Resume extends React.Component {
    componentDidMount(){
        const log = {
            time: Date.now(),
            action: `mount`,
            component: `resume`
          }
          this.props.updateLogs(log)
    }

    componentWillUnmound(){
        const log = {
            time: Date.now(),
            action: `unmount`,
            component: `resume`
          }
          this.props.updateLogs(log)
    }
    
    render(){
        return (
            <div className="resume-div">
                <ResumeDiv>
                    <Intro className="section" />
                    <Jobs className="section" />
                    <Education className="section" />
                    {/* <Section section={Ed} /> */}
                    <Projects className="section" />
                </ResumeDiv>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {state};
  }
  
export default connect(mapStateToProps, {updateLogs})(Resume)

const ResumeDiv = styled.div `
  max-width: 800px;
  padding: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  max-height: 2500px;
  .section{
      border: 1px solid red;
      margin-top: 15px;
  }
  a {
      text-decoration: none;
      color: black;
      &:hover{
          cursor: pointer;
          text-decoration: underline;
      }
      :visited{
          color: black;
          text-decoration-line: none;
      }
  }
  .container {
    background: orange;
  }
`;