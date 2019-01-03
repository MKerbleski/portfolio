import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Intro from './intro'
import Education from './education'
import Projects from './projects'
import Jobs from './jobs'
import Resume from './resume'

const ResumePage = () => {
  return <div className="resume-page-div">
              <ResumePageDiv>
                    <Resume />
                    <div className="print-link">
                        <Link className="print" to="/print">Print Resume Page</Link>
                    </div>
              </ResumePageDiv>
          </div>
}

export default ResumePage;

const ResumePageDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightgray;
  .print-link{
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-end;
      .print{
          padding: 5px;
          text-decoration: none;
          :hover{
              text-decoration: underline;
          }
      }
  }
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
  
`;