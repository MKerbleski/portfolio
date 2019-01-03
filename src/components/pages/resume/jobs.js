import React from 'react'
import styled from 'styled-components';

export default class Jobs extends React.Component {
    render(){
        return (
            <JobsDiv>
                <div className="topic">
                    <h3>Employment</h3>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Graduate Teaching Assistant</span>
                        <span className="two">School of Communication</span>
                        <span className="three">Aug 2016-May 2018</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Teaching, learning, mentoring </li>
                            <li>detail</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">360 Video Specialist</span>
                        <span className="two">Interactive Virtual Reality Lab</span>
                        <span className="three">Jan 2017-Jun 2017</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>vr details: Tonto National Monument, documentary, NAU basketball, Fiction film, Interactive</li>
                            <li>vr details: collaboration</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Video Manager</span>
                        <span className="two">NAU Marketing</span>
                        <span className="three">May 2015-May 2016</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Marketing detail: manager, scheduling, budgeting, project planning, supervising, organization</li>
                            <li>detail</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Videographer</span>
                        <span className="two">NAU Marketing</span>
                        <span className="three">Jan 2014-Dec 2014</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>video detail</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Internship</span>
                        <span className="two">Vora Financial Group</span>
                        <span className="three">Oct 2012-May 2013</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>vora details</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Various Positions</span>
                        <span className="two">Vail Valley Foundation</span>
                        <span className="three">2011-2017</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>vvf details</li>
                        </ul>
                    </div>
                </div>
            </JobsDiv>
        )
    }
}

const JobsDiv = styled.div`
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
        border: 1px solid blue;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        ul {
            border: 1px solid green;
            list-style-type: none;
            li {
                border: 1px solid red;
                float: right;
            }
        }
    }
`