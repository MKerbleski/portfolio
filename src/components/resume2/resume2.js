import React from 'react';
import styled from 'styled-components';
import { Intro2, Education2, Projects2, Jobs2 } from './index'

const Resume = () => {
    return  <div className="resume-div">
                <ResumeDiv>
                    <h1>resume1</h1>
                    <Intro2 className="section" />
                    {/* <Section section={Ed} /> */}
                    <Projects2 className="section" />
                    {/* <Education2 className="section" /> */}
                    <Jobs2 className="section" />
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