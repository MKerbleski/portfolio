import React from 'react'
import styled from 'styled-components';

export default class Projects extends React.Component {
    render(){
        return (
            <ProjectsDiv>
                <div className="sectionTitle">
                    <h3>Software Projects</h3>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Stic.ky</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Front End: Redux, React, Styled Components, Axios, Ajax, RESTful API, Express</li>
                            <li>Back End: Arcitechure, node.js, middleware, authentication, knex, sqlite3, postgress, heroku, </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">MUD</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: Websockets, Python, Django </li>
                            <li>deployed on Netlify </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Conways Game of Life</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: conways game of life is a simulation that visualizes the cellular automata rules set in Conways game of life </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Intro Design</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: HTML5 CSS LESS, wireframes, using no Libraries</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Skills in progress</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Isomorphic Universal serverside rendered applications</li>
                        </ul>
                    </div>
                </div>
            </ProjectsDiv>
        )
    }
}

const ProjectsDiv = styled.div`
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
    .sectionTitle {
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
    .dateAndTitle {
        /* border: 1px solid blue; */
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        span {
            /* border: 1px solid green; */
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
                border: 1px solid red;
                float: right;
            }
        }
    }
`