import React from 'react';
import { Link } from 'react-router-dom';
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
                      <Education />
                      <Projects />
                      <Jobs />
                  </div>
              </ResumeDiv>
          </div>
}

export default Resume;

const ResumeDiv = styled.div `
  border: 2px solid green;
  max-width: 800px;
  padding: 15px;
  margin: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  a {
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
    
  }
`;