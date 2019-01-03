import React, {Component} from 'react'
import styled from 'styled-components';

export default class Intro extends React.Component {
    render(){
        return (
            <IntroDiv>
                <div className="left">
                    <ul>
                        <li><a href="https://github.com/mkerbleski">github.com/mkerbleski</a></li>
                    </ul>
                </div>
                <div className="center">
                    <h1>Mike Kerbleski</h1>
                </div>
                <div className="right">
                    <ul>
                        <li>resume@kerble.ski</li>
                        <li>520-333-6271</li>
                        <li><a href="http://kerble.ski">http://kerble.ski</a></li>
                    </ul>
                </div>
            </IntroDiv>
        )
    }
}

const IntroDiv = styled.div`
    border: 1px solid red;
    box-sizing: border-box;
    padding: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    * {
        margin: 0;
    }
    .left {
        border: 1px solid blue;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        ul {
            /* border: 1px solid green; */
            list-style-type: none;
                padding: 0;
            li {
                float: left;
                /* border: 1px solid red; */
            }
        }
    }
    .center {
        border: 1px solid blue;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .right {
        border: 1px solid blue;
        width: 100%;
        ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            border: 1px solid green;
            list-style-type: none;
            li {
                /* border: 1px solid red; */
                float: right;
            }
        }
    }
`