import React from 'react'
import styled from 'styled-components';
import { sectionTitle, sectionContainer, dateAndTitle } from './styles';

export default class Projects extends React.Component {
    render(){
        return (
            <ProjectsDiv>
                <div className="sectionTitle">
                    <h3>Software Projects</h3>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Personal Website: 
                            <a href="http://kerble.ski">http://kerble.ski</a>
                        </span>
                    </strong>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">
                            <a href="https://github.com/MKerbleski/front-end-project-week" target="_blank">Stic.ky</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>A full stack Personal Data Aggregator that combines user ideas with bookmarking features from 3rd party applications</li>
                            <li>Front End: Redux, React.js, Styled Components, Axios, Ajax, RESTful API, Express, React DnD, ES6</li>
                            <li>Back End: Arcitechure, node.js, middleware, authentication, knex, SQLite3, postgress, heroku</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">
                            <a href="https://github.com/LaikaFusion/License-Plate-Game" target="_blank">License Plate Game</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>One day project collaborating with 2 teammates to bring together a shared vision of the classic game.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">
                            <a href="https://amudappthatdoesntsuck.xyz" target="_blank">MUD</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Designed and developed a front end user experience for 
                                <a href="https://github.com/LambdaSchool/LambdaMUD-Project/blob/master/README.md" target="_blank">
                                an existing Python Django backend API</a>
                                which also needed modifications.</li>
                            <li>Utilized: Websockets, Netlify</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle"> 
                        <span className="one"><a href="https://mkerbleski.github.io/Conways-Life/" target="_blank">Cellular Automata</a></span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Developed a simulation and algorithim that visualizes the rules set in Conway's "Game of Life"</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">
                            <a href="https://mkerbleski.github.io/User-Interface-Project-Week/" target="_blank">S&J Arcitecture</a>
                        </span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Turned wireframes specs into a pixel-perfect, dynamic, (for mobile and desktop) UI/UX using HTML5, CSS, LESS, Javascript.</li>
                        </ul>
                    </div>
                </div>
                {/* <div>
                    <strong className="dateAndTitle">
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
    .dateAndTitle {
        /* border: 1px solid blue; */
       ${dateAndTitle()}
    }
`