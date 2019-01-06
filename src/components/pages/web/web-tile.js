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
    background: gray;
    width: 49%;
    margin: 2px;
    text-align: center;
    color: black;
    &:hover{
        background: lightgray;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: black;
    }
`