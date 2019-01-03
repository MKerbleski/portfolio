import React from 'react'
import styled from 'styled-components';

export default class Projects extends React.Component {
    render(){
        return (
            <ProjectsDiv>
                <div className="topic">
                    <h3>Software Projects</h3>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Stic.ky</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: </li>
                            <li>detail</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">MUD</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: </li>
                            <li>detail</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Conways Game of Life</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <strong className="summary">
                        <span className="one">Intro Design</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Utilized: </li>
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