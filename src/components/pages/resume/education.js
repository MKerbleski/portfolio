import React from 'react'
import styled from 'styled-components';
import { sectionHeader, sectionTitle, sectionContainer } from './styles';

export default class Education extends React.Component {
    render(){
        return (
            <EducationDiv>
                <div className="sectionTitle">
                    <h3>Education</h3>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="left">Remote</span>
                        <a className="center" href="https://learn.lambdaschool.com/course/cs-fsw" target="_blank">Lambda School</a>
                        <span className="right">June 2018 - Feb 2019</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>Full Stack Web Development</strong>: HTML, CSS, LESS, Javascript, Node.js, Git, Database, Authentication, Testing</li>
                            <li><strong>Computer Science</strong>: Python, OOP, Algorithims, Data Structures, Graphs, Django, Hash Tables, caching</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="left">Flagstaff, AZ</span>
                        <span className="center">Northern Arizona University</span>
                        <span className="right">Aug 2011 - Dec 2018</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>M.A.</strong> Communication - Documentary, VR, Brain Computer Interface, Bitcoin, Technical written communication</li>
                            <li><strong>B.S.</strong> Electronic Media and Film - Adobe After Effects, Premiere, Final Cut, Photoshop, Cinematography, Timelapse</li>
                            <li><strong>Minor</strong>: Business - Microsoft Word, Excel, Powerpoint, Accounting, Finance</li>
                            {/* <li><strong>Extra</strong>: Mascot - Hype</li> */}
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="left">Albuquerque, NM</span>
                        <span className="center">Sandia Preparatory School</span>
                        <span className="right">June 2011</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>High School</strong>: Eagle Scout, Newspaper Editor-in-Chief, Outdoor Leadership Program</li>
                        </ul>
                    </div>
                </div>
            </EducationDiv>
        )
    }
}

const EducationDiv = styled.div`
    /* border: 1px solid red; */
    ${sectionContainer()}
    .sectionTitle {
        /* border: 1px solid blue; */
        ${sectionTitle()}
    }
    .sectionHeader {
        text-decoration: none;
       ${sectionHeader()}
    }
`