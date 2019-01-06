import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Intro from './intro'
import Section from './section'
import Education from './education'
import Projects from './projects'
import Jobs from './jobs'
import { Ed } from './jobsObj.js'

const Resume = () => {
  return <div className="resume-div">
              <ResumeDiv>
                  <Intro />
                  <Education />
                  {/* <Section section={Ed} /> */}
                  <Projects />
                  <Jobs />
              </ResumeDiv>
          </div>
}

export default Resume;

const ResumeDiv = styled.div `
  max-width: 800px;
  padding: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
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