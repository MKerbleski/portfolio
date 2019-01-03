import React from 'react'
import styled from 'styled-components';
import { sectionTitle, sectionContainer, dateAndTitle } from './styles';

export default class Jobs extends React.Component {
    render(){
        return (
            <JobsDiv>
                <div className="sectionTitle">
                    <h3>Employment</h3>
                </div>
                {/* //GTA */}
                <div>
                    <strong className="dateAndTitle">
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
                {/* //VR Lab */}
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">360 Video Specialist</span>
                        <span className="two">Interactive Virtual Reality Lab</span>
                        <span className="three">Jan 2017-Jun 2017</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>vr details: Tonto National Monument, Documentary, NAU basketball, Fiction film, Interactive</li>
                            <li>vr details: collaboration, artists, sound editing, interactive videos</li>
                        </ul>
                    </div>
                </div>
                {/* //Video Manager */}
                <div>
                    <strong className="dateAndTitle">
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
                {/* //Videographer */}
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Videographer</span>
                        <span className="two">NAU Marketing</span>
                        <span className="three">Jan 2014-Dec 2014</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>video detail, survived major round of layoffs</li>
                        </ul>
                    </div>
                </div>
                {/* //Vora */}
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Internship</span>
                        <span className="two">Vora Financial Group</span>
                        <span className="three">Oct 2012-May 2013</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>vora details, stocks, money managment, file managment, data base entry,s </li>
                        </ul>
                    </div>
                </div>
                {/* //VVF */}                
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Various Positions</span>
                        <span className="two">Vail Valley Foundation</span>
                        <span className="three">2011-2017</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>vvf details temporary event managment loading dock managment, attention to detail, advanced planning, machines, grit, event managment</li>
                        </ul>
                    </div>
                </div>
                {/* //Toji */}                
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Internship</span>
                        <span className="two">Toji Trading</span>
                        <span className="three">May 2011</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>high frequency trading, futures, automation, stocks, currency</li>
                        </ul>
                    </div>
                </div>
            </JobsDiv>
        )
    }
}

const JobsDiv = styled.div`
    /* border: 1px solid red; */
    ${sectionContainer()}
    .sectionTitle {
        /* border: 1px solid blue; */
       ${sectionTitle()}
    }
    .dateAndTitle {
        /* border: 1px solid blue; */
        ${dateAndTitle()}
    }
`