import React from 'react';
import styled from 'styled-components';

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
    .col {
      border: 1px solid pink;
      margin: 5px;
    }
    .right {
      max-width: 30%;
    }
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .header {
      border-bottom: 1px solid green;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0, 0, 10px, 0;
      h1, p {
        border: 1px solid blue;
        margin: 0;
        padding: 0;
      }
    }
  }
`;

const Resume = () => {
  return (<div className="resume-div">
    <ResumeDiv>
      <div className="container">

        <div className="header">
          <h1>Mike Kerbleski</h1>
          <div>
            <p>mkerbleski7@gmail.com</p>
            <p>555-555-555</p>
            <p>Albuquerque, NM</p>
          </div>
        </div>

        <h1>Summary</h1>
        <p>E e familiaritatem. Quis fabulas fidelissimae, sed summis eiusmod voluptatibus et in summis summis labore litteris ea possumus fore multos ad minim. Tempor ubi admodum. Quamquam est esse litteris.
        </p>

        <div className="row">
          <div className="col">
            <h1>Experience</h1>
            <h3>VR</h3>
              <p>Laborum hic multos appellat, aut voluptate id quamquam iis fore doctrina despicationes ubi ne elit officia eruditionem. Nulla cupidatat si eram sunt, nisi commodo de illum quorum nam noster coniunctione vidisse summis laboris, do mentitum fidelissimae. Ne dolore senserit comprehenderit te nescius enim fugiat ex enim, eu quis laborum iis nam de distinguantur.</p>
            <h3>Marketing</h3>
            <p>Laborum hic multos appellat, aut voluptate id quamquam iis fore doctrina despicationes ubi ne elit officia eruditionem. Nulla cupidatat si eram sunt, nisi commodo de illum quorum nam noster coniunctione vidisse summis laboris, do mentitum fidelissimae. Ne dolore senserit comprehenderit te nescius enim fugiat ex enim, eu quis laborum iis nam de distinguantur.</p>
            <h3>Vail Valley</h3>
              <p>Laborum hic multos appellat, aut voluptate id quamquam iis fore doctrina despicationes ubi ne elit officia eruditionem. Nulla cupidatat si eram sunt, nisi commodo de illum quorum nam noster coniunctione vidisse summis laboris, do mentitum fidelissimae. Ne dolore senserit comprehenderit te nescius enim fugiat ex enim, eu quis laborum iis nam de distinguantur.</p>
            <h3>Toji Trading</h3>
              <p>Laborum hic multos appellat, aut voluptate id quamquam iis fore doctrina despicationes ubi ne elit officia eruditionem. Nulla cupidatat si eram sunt, nisi commodo de illum quorum nam noster coniunctione vidisse summis laboris, do mentitum fidelissimae. Ne dolore senserit comprehenderit te nescius enim fugiat ex enim, eu quis laborum iis nam de distinguantur.</p>

          </div>

          <div className="col right">
            <h1>Languages / Programs</h1>
              <p>HTML, CSS, Bootstrap, GIT, Javascript, React, Redux</p>
            <h1>Education</h1>
              <h3>NAU - Masters</h3>
                <p>Laborum hic multos appellat, aut voluptate id quamquam iis fore doctrina despicationes ubi ne elit officia eruditionem. Nulla cupidatat si eram sunt, nisi commodo de illum quorum nam noster coniunctione vidisse summis laboris, do mentitum fidelissimae. Ne dolore senserit comprehenderit te nescius enim fugiat ex enim, eu quis laborum iis nam de distinguantur.</p>
              <h3>NAU - UnderGrad</h3>
                <p>Laborum hic multos appellat, aut voluptate id quamquam iis fore doctrina despicationes ubi ne elit officia eruditionem. Nulla cupidatat si eram sunt, nisi commodo de illum quorum nam noster coniunctione vidisse summis laboris, do mentitum fidelissimae. Ne dolore senserit comprehenderit te nescius enim fugiat ex enim, eu quis laborum iis nam de distinguantur.</p>
              <h3>Sandia Prep</h3>
                <p>Laborum hic multos appellat, aut voluptate id quamquam iis fore doctrina despicationes ubi ne elit officia eruditionem. Nulla cupidatat si eram sunt, nisi commodo de illum quorum nam noster coniunctione vidisse summis laboris, do mentitum fidelissimae. Ne dolore senserit comprehenderit te nescius enim fugiat ex enim, eu quis laborum iis nam de distinguantur.</p>
            <h1>Certifications / Awards</h1>
              <p>Laborum hic multos appellat, aut voluptate id quamquam iis fore doctrina despicationes ubi ne elit officia eruditionem. Nulla cupidatat si eram sunt, nisi commodo de illum quorum nam noster coniunctione vidisse summis laboris, do mentitum fidelissimae. Ne dolore senserit comprehenderit te nescius enim fugiat ex enim, eu quis laborum iis nam de distinguantur.</p>
          </div>
        </div>

      </div>
    </ResumeDiv>

  </div>)
}

export default Resume;
