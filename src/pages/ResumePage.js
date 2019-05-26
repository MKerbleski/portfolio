import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Resume } from '../components/resume'

const ResumePage = () => {
  return <div className="resume-page-div">
            <ResumePageDiv>
                <div className="resume-container">
                    <Resume />
                </div>
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
  .resume-container{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 20px;
  }
  .print-link{
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-end;
      .print{
          padding: 5px;
          text-decoration: none;
          :hover {
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