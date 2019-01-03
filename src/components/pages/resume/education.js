import React from 'react'
import styled from 'styled-components';
import { dateAndTitle, sectionTitle, sectionContainer } from './styles';

export default class Education extends React.Component {
    render(){
        return (
            <EducationDiv>
                <div className="sectionTitle">
                    <h3>Education</h3>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Remote</span>
                        <span className="two"><a href="https://learn.lambdaschool.com/course/cs-fsw" target="_blank">Lambda School</a></span>
                        <span className="three">June 2018-Feb 2019</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>Web Development</strong>: HTML, CSS, LESS, Javascript, Node.js, Git, Database, Authentication, Testing</li>
                            <li><strong>Computer Science</strong>: Python, OOP, Algorithims, Data Structures, Graphs, Django, Hash Tables, caching</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Flagstaff, AZ</span>
                        <span className="two">Northern Arizona University</span>
                        <span className="three">Aug 2011-Dec 2018</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>Masters</strong>: Communication - Unreal Engine 4, Virtual Reality, Brain Computer Interface, Bitcoin and Cryptocurencies</li>
                            <li><strong>Major</strong>: Electronic Media and Film - Adobe After Effects, Premiere, Final Cut</li>
                            <li><strong>Minor</strong>: Business - Microsoft Word, Excel</li>
                            <li><strong>Extra</strong>: Mascot - Hype</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Albuquerque</span>
                        <span className="two">Sandia Preparatory School</span>
                        <span className="three">June 2011</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>High School</strong>: Eagle Scout, Newspaper Editor-in-Cheif, Outdoor Leadership Program</li>
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
    .dateAndTitle {
        text-decoration: none;
       ${dateAndTitle()}
    }
`