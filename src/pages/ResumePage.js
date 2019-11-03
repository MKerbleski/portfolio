import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Resume } from '../components/resume';
import { Document } from 'react-pdf'

class ResumePage extends React.Component {

    render(){
        return (
            <div className="resume-page-div">
                <ResumePageDiv>
                    <div className="resume-container"> 
                        <iframe style={{width: "100%", height: "100%"}} title="resume" src={process.env.REACT_APP_RESUME_LINK}></iframe> 
                    </div>
                </ResumePageDiv>
            </div>
        )
    }
}

export default ResumePage;

const ResumePageDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */
  height: 90vh;
  width: 90vw;
  .resume-container{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 20px;
    width: 90vw;
    height: 100%;
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