import React from 'react'
import styled from 'styled-components';
import { sectionHeader, sectionTitle, sectionContainer } from '../../styles/styles';

export default class Education extends React.Component {
    render(){
        return (
            <EducationDiv>
                <div className="sectionTitle">
                    <h3>Education</h3>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span><a className="left" href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a></span>
                        <span className="center">Remote</span>
                        <span className="right">June 2018 - Feb 2019</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>Full Stack Web Development</strong>: HTML, CSS, Javascript, Node.js, Git, Database, Authentication, Testing</li>
                            <li><strong>Computer Science</strong>: C, Python, OOP, Algorithms, Data Structures, Graphs, Django, Hash Tables, Caching</li>
                        </ul>
                    </div>
                </div> 
                <div>
                    <strong className="sectionHeader">
                        <span className="left">Northern Arizona University</span>
                        <span className="center">Flagstaff, AZ</span>
                        <span className="right">Aug 2011 - Dec 2018</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>M.A.</strong> Communication - Documentaries, Virtual Reality, Brain Computer Interface, Ponzi Schemes  & Bitcoin</li>
                            <li><strong>B.S.</strong> Electronic Media and Film - After Effects, Premiere, Photoshop, Final Cut, Cinematography, Timelapse</li>
                            <li><strong>Minor</strong>: Business - Microsoft Word, Excel, Powerpoint, Accounting, Finance <strong>Mascot</strong>: Louie The Lumberjack</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="left">Sandia Preparatory School</span>
                        <span className="center">Albuquerque, NM</span>
                        <span className="right">June 2011</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>High School</strong>: Eagle Scout, Newspaper: Editor-in-Chief, Outdoor Leadership Program, Lacrosse & Hockey: Captain</li>
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