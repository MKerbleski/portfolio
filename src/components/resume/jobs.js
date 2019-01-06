import React from 'react'
import styled from 'styled-components';
import { sectionHeader, sectionTitle, sectionContainer } from '../../styles/styles';

export default class Jobs extends React.Component {
    render(){
        return (
            <JobsDiv>
                <div className="sectionTitle">
                    <h3>Employment</h3>
                </div>
                {/* //GTA */}
                <div>
                    <strong className="sectionHeader">
                        <span className="one">Graduate Teaching Assistant</span>
                        <span className="center">NAU School of Communication</span>
                        <span className="right">Aug 2016 - May 2018</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Delivered technical written and spoken communication to 4 classes of 
                                10-15 students on the basic operations of editing software and filmmaking equipment.</li>
                        </ul>
                    </div>
                </div>
                {/* //VR Lab */}
                <div>
                    <strong className="sectionHeader">
                        <span className="one">360 Video Specialist</span>
                        <span className="center">
                            <a href="https://www.facebook.com/nauivrlab/">NAU Interactive Virtual Reality Lab</a></span>
                        <span className="right">Jan 2017 - Jun 2017</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Created collaborative 360 video projects among artists, 
                                sound editors, archeologists, computer scientists. Software: UE4.</li>
                            <li>Projects: 
                                <a href="http://swvirtualmuseum.nau.edu/wp/Tonto_panos/Tonto-NM-pano-tour.html"> Tonto National Monument (interactive)</a>, 
                                <a href="https://vimeo.com/209591527"> Chem VR</a>, 
                                <a href="https://vimeo.com/214381757"> NAU basketball (interactive)</a>, 
                                <a href=""> Fiction film</a>
                                </li>
                        </ul>
                    </div>
                </div>
                {/* //Video Manager */}
                <div>
                    <strong className="sectionHeader">
                        <span className="one">Video Manager</span>
                        <span className="center">
                            <a href="https://vimeo.com/nauvideo">NAU Marketing</a>
                        </span>
                        <span className="right">May 2015 - May 2016</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Managed, scheduled, budegeted, planned, supervised for a team of 5 videographers. </li>
                            <li>Organized workflows, 
                                {/* created backup data managment plans.  */}
                                 Corridnated among internal and external vendors.</li>
                        </ul>
                    </div>
                </div>
                {/* //Videographer */}
                <div>
                    <strong className="sectionHeader">
                        <span className="one">Videographer</span>
                        <span className="center">
                            <a href="https://vimeo.com/nauvideo">NAU Marketing</a></span>
                        <span className="right">Jan 2014 - Dec 2014</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Produced, directed, and edited videos for the university. 
                                Self-started a reorganization of the team's assets.</li>
                        </ul>
                    </div>
                </div>
                {/* //Vora */}
                <div>
                    <strong className="sectionHeader">
                        <span className="one">Internship</span>
                        <span className="center">Vora Financial Group</span>
                        <span className="right">Oct 2012 - May 2013</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Assisted in the file managment and preservation of financial records,
                                 created necessary redundencies</li>
                            <li>Knowledge Leveraged: Asset managments, wealth managment, 
                                financial planning, microeconomics.</li>
                            
                        </ul>
                    </div>
                </div>
                {/* //VVF */}                
                <div>
                    <strong className="sectionHeader">
                        <span className="one">Various Positions</span>
                        <span className="center">Vail Valley Foundation</span>
                        <span className="right">2011 - 2017</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Various event managment positions for events throughout the 
                                Vail Valley in Colorado.</li>
                            <li>Knowledge Leveraged: Logistics, advanced planning, event managment, 
                                attention to detail, improvisation.</li>
                        </ul>
                    </div>
                </div>
                {/* //Toji */}                
                <div>
                    <strong className="sectionHeader">
                        <span className="one">Internship</span>
                        <span className="center">Toji Trading</span>
                        <span className="right">May 2011</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Shadowed high frequency traders and gained insights 
                                into the world of stocks, futures, and currencies.</li>
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
    .sectionHeader {
        /* border: 1px solid blue; */
        ${sectionHeader()}
    }
`