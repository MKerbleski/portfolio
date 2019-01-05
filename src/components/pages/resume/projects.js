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
                        <span className="one">Personal Website: <a href="http://kerble.ski">http://kerble.ski</a></span>
                    </strong>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one"><a href="https://amudappthatdoesntsuck.xyz" target="_blank">Stic.ky</a></span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Personal Data Aggregator</li>
                            <li>Front End: Redux, React.js, Styled Components, Axios, Ajax, RESTful API, Express, React Drag and Drop, ES6</li>
                            <li>Back End: Arcitechure, node.js, middleware, authentication, knex, sqlite3, postgress, heroku, </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one"><a href="" target="_blank">TBD Capstone</a></span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Collaborative website with 6 students for 5 weeks, communication, collaboration, vision, Team, from wireframes to functionall application</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one"><a href="https://amudappthatdoesntsuck.xyz" target="_blank">MUD</a></span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: Websockets, Python, Django, API </li>
                            <li>deployed on Netlify </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle"> 
                        <span className="one"><a href="https://mkerbleski.github.io/Conways-Life/" target="_blank">Conways Game of Life</a></span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: conways game of life is a simulation that visualizes the cellular automata rules set in Conways game of life </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one"><a href="https://mkerbleski.github.io/User-Interface-Project-Week/" target="_blank">Intro Design</a></span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: HTML5, CSS, LESS, wireframes, using no Libraries, bootstrap, Dynamic, mobile design, user interface, user design</li>
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