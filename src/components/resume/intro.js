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
                    <h1>Michael Kerbleski</h1>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="mailto:mkerbleski7@google.com">mkerbleski7@gmail.com</a></li>
                        <li><a href="tel:1-520-333-6271">520-333-6271</a></li>
                        <li><a href="https://mikerble.ski">https://kerble.ski</a></li>
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
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        /* @media (max-width: 800px){
            display: none;
        } */
        ul {
            /* border: 1px solid green; */
            list-style-type: none;
                padding: 0;
                @media (min-width: 500px){
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            li {
                float: left;
                /* border: 1px solid red; */
                /* @media (min-width: 500px){
                flex-direction: column;
                justify-content: center;
                align-items: center;
            } */
            }
        }
    }
    .center {
        /* border: 1px solid green; */
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* @media (max-width: 800px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } */
        h1{
            text-align: center;
        }
    }
    .right {
        width: 80%;
        /* @media (max-width: 800px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } */
        ul {
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            list-style-type: none;
            /* @media (max-width: 800px){
                flex-direction: column;
                justify-content: center;
                align-items: center;
            } */
            li {
                /* border: 1px solid red; */
                float: right;
            }
        }
    }
`