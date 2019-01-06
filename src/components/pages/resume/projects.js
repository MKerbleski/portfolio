import React from 'react'
import styled from 'styled-components';
import { sectionTitle, sectionContainer, sectionHeader } from './styles';

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
                            <a href="https://mkerbleski.github.io/front-end-project-week/" target="_blank">Stic.ky</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Personal Data Aggregator that combines user ideas with bookmarking features from 3rd party applications</li>
                            <li>Front End: Redux, React.js, Styled Components, Axios, Ajax, RESTful API, Express, React DnD, ES6</li>
                            <li>Back End: Arcitechure, Node.js, middleware, authentication, Knex, SQLite3, Heroku</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="one">
                            <a href="https://mkerbleski.github.io/License-Plate-Game/" target="_blank">License Plate Game</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>One day project collaborating with 2 teammates to bring together a shared vision of the classic game.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader">
                        <span className="one">
                            <a href="https://amudappthatdoesntsuck.xyz" target="_blank">MUD</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Designed and developed a front end UX, with websockets, for   
                                <a href="https://github.com/LambdaSchool/LambdaMUD-Project/blob/master/README.md" target="_blank"> an existing Python Django backend API</a>
                                </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="sectionHeader"> 
                        <span className="one"><a href="https://mkerbleski.github.io/Conways-Life/" target="_blank">Cellular Automata</a></span>
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
                            <a href="https://mkerbleski.github.io/User-Interface-Project-Week/" target="_blank">S&J Arcitecture</a>
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
`