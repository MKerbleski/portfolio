import React , { Component } from 'react'
import styled from 'styled-components'

export default class WebTile extends Component {
    clickHandler = (e) => {
        window.open(this.props.item.link)
    }

    render(){
        return(
            <WebTileDiv onClick={this.clickHandler}> 
                    <h1>{this.props.item.name}</h1>
            </WebTileDiv>
        )
    }
}

const WebTileDiv = styled.div`
    background: white;
    width: 49%;
    margin: 2px;
    text-align: center;
    color: black;
    margin: 5px;
    min-height: 200px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    &:hover{
        background: #f2f2f2;
        cursor: pointer;
        /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    }
    a {
        text-decoration: none;
        color: black;
    }
`