import React from 'react'
import styled from 'styled-components';
import { sectionHeader, sectionTitle, sectionContainer } from '../../styles/styles';

export default class Projects extends React.Component {
    render(){
        return (
            <ProjectsDiv>
                <div className="sectionTitle">
                    <h3>Software Projects</h3>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="one">Personal Website: -  
                            <a href="http://kerble.ski"> http://kerble.ski</a>
                        </span>
                    </strong>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="one">
                            <a href="https://mkerbleski.github.io/front-end-project-week/" target="_blank" rel="noopener noreferrer">Stic.ky (in progress)</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Personal Data Aggregator that collects saved items from 3rd party applications</li>
                            <li>Front End: Redux, React.js, Styled Components, Axios, Ajax, RESTful API, Node.js, Express, React DnD, ES6</li>
                            <li>Back End: Arcitechure, Node.js, middleware, authentication, Knex, SQLite3, Heroku</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="one">
                            <a href="https://ecstatic-dev-profiles.netlify.com/" rel="noopener noreferrer" target="_blank">Developer Profiles (in progress)</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>5 week capstone project with 5 classmates working remotly taking wireframes to deployed app. The web application is a place for employers to connect with paying prospective applicants.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="one">
                            <a href="https://amudappthatdoesntsuck.xyz" target="_blank" rel="noopener noreferrer">MUD</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Designed and developed a front end UX, with websockets, and modified    
                                <a href="https://github.com/LambdaSchool/LambdaMUD-Project/blob/master/README.md" target="_blank" rel="noopener noreferrer"> an existing Python Django backend API</a>
                                </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader"> 
                        <span className="one"><a href="https://mkerbleski.github.io/Conways-Life/" target="_blank" rel="noopener noreferrer">Cellular Automata</a></span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Developed a simulation and algorithim that visualizes the rules set in Conway's "Game of Life"</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="one">
                            <a href="https://mkerbleski.github.io/User-Interface-Project-Week/" target="_blank" rel="noopener noreferrer">S&J Arcitecture</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Turned wireframes into a pixel-perfect dynamic UI/UX using HTML5, CSS, LESS, Javascript.</li>
                        </ul>
                    </div>
                </div>
                {/* <div>
                    <strong className="sectionHeader">
                        <span className="one">Skills in progress</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Isomorphic Universal serverside rendered applications</li>
                        </ul>
                    </div>
                </div> */}
            </ProjectsDiv>
        )
    }
}

const ProjectsDiv = styled.div`
    /* border: 1px solid red; */
    ${sectionContainer()}
    .sectionTitle{
        ${sectionTitle()}
    }
    .sectionHeader {
        /* border: 1px solid blue; */
       ${sectionHeader()}
    }
    .details {
        font-size: 12px;
    }
`