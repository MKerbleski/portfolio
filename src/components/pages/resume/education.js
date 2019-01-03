import React from 'react'
import styled from 'styled-components';

export default class Education extends React.Component {
    render(){
        return (
            <EducationDiv>
                <div className="topic">
                    <h3>Education</h3>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Remote</span>
                        <span className="two">Lambda School</span>
                        <span className="three">June 2018-Feb 2019</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>Web Development</strong>: HTML, CSS, LESS, Javascript, Node.js</li>
                            <li><strong>Computer Science</strong>: Python, Algorithims, Data Structures </li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div>
                    <strong className="summary">
                        <span className="one">Flagstaff, AZ</span>
                        <span className="two">Northern Arizona University</span>
                        <span className="three">Aug 2011-Dec 2018</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li><strong>Masters</strong>: Communication - Unreal Engine 4, Virtual Reality, Brain Computer Interface </li>
                            <li><strong>Major</strong>: Electronic Media and Film - Adobe After Effects, Premiere, Final Cut</li>
                            <li><strong>Minor</strong>: Business - Microsoft Word, Excel</li>
                            <li><strong>Extra</strong>: Mascot - Hype</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div>
                    <strong className="summary">
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
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    * {
        margin: 0;
        width: 100%;
        box-sizing: border-box;
        
    }
    .topic {
        /* border: 1px solid blue; */
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        border-bottom: 1px solid black;
        h3 {
            margin: 0;
        }
    }
    .summary {
        /* border: 1px solid blue; */
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        span {
            /* border: 1px solid green; */
        }
        .one {
            float: left;
        }
        .two {
            text-align: center;
        }
        .three {
            display: flex;
            justify-content: flex-end;
        }
    }
    .right {
        /* border: 1px solid blue; */
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        ul {
            /* border: 1px solid green; */
            list-style-type: none;
            li {
                /* border: 1px solid red; */
                float: right;
            }
        }
    }
`