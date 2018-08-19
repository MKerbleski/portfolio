import React from 'react';
import styled from 'styled-components';

const ResumeDiv = styled.div`
  background: gray;
  width: 95%;


`;


const Resume = () => {
  return (
    <div className="resume-div">
      <ResumeDiv>
        <div className="row">
          <h1>Mike Kerbleski</h1>
          <div> Contact Info
            <p>mkerbleski7@gmail.com</p>
            <p>555-555-555</p>
            <p>Albuquerque, NM</p>
          </div>
        </div>
        <h1>Experience</h1>
        
        <li>sdf</li>
        <li>sdf</li>
        <h1>Education</h1>
        <h1>Summary</h1>
        <h1>Certifications / Awards</h1>
      </ResumeDiv>

    </div>
  )
}

export default Resume;
