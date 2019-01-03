import React, {Component} from 'react'
import styled from 'styled-components';

export default class Intro extends React.Component {
    render(){
        return (
            <IntroDiv>
                <div className="left">
                    <ul>
                        <li><a href="https://github.com/mkerbleski">https://github.com/mkerbleski</a></li>
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
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: row;
    .left {
        /* border: 1px solid blue; */
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
        /* border: 1px solid blue; */
        width: 100%;
        display: flex;
        justify-content: center;
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
                /* border: 1px solid red; */
                float: right;
            }
        }
    }
`