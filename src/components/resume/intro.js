import React from 'react'
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
                        <li><a href="mailto:resume@kerble.ski">resume@kerble.ski</a></li>
                        <li><a href="tel:1-520-333-6271">520-333-6271</a></li>
                        <li><a href="https://mikerble.ski">http://mikerble.ski</a></li>
                    </ul>
                </div>
            </IntroDiv>
        )
    }
}

const IntroDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
    * {
        margin: 0;
        box-sizing: border-box;
    }
    .left {
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
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right {
        width: 100%;
        ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            list-style-type: none;
            li {
                /* border: 1px solid red; */
                float: right;
            }
        }
    }
`