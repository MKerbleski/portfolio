import React from 'react';
import styled from 'styled-components';
import Intro from './intro'
import Education from './education'
import Projects from './projects'
import Jobs from './jobs'

const Resume = () => {
  return <div className="resume-div">
              <ResumeDiv>
                  <div className="container">
                      <Intro />
                      <br></br>
                      <Education />
                      <br></br>
                      <Projects />
                      <br></br>
                      <Jobs />
                  </div>
              </ResumeDiv>
          </div>
}

export default Resume;

const ResumeDiv = styled.div `
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: lightgray;
  .container {
    max-width: 800px;
    padding: 15px;
    margin: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: baseline;
  }
`;